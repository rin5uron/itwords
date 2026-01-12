# AI Agent Runbook for `itwords` Project

**This document is a runbook for a Generative AI agent to manage and extend the `itwords` project.**

---

## 📜 Core Principles

1.  **Clarity and Confirmation**: Before executing file modifications or potentially destructive commands, state your plan and ask for confirmation.
2.  **Adherence to Structure**: Follow the existing project structure, conventions, and coding style. Use existing templates where available.
3.  **Human-in-the-Loop**: For tasks requiring subjective judgment or access to external private data (e.g., Google Analytics, Search Console), you must prompt the Human for the necessary information.
4.  **Tool Usage**: Use the available tools (`read_file`, `write_file`, `run_shell_command`, etc.) to interact with the file system. Do not hallucinate file contents.

---

## ⚙️ Workflows

This section details the standard operating procedures for managing this project.

### WORKFLOW: Add New Term

This workflow is initiated when the Human requests the creation of a new term page (e.g., "Create a page for the term 'Cache'").

#### **PHASE 1: PLAN (Requires Human Input)**

1.  **Receive Request**: Acknowledge the request from the Human.
2.  **Clarify Keyword**: If the primary target keyword is not specified or is ambiguous, ask the Human for clarification. (e.g., "What is the primary keyword for this term?").
3.  **Load Context**: Read the following file to understand the project's SEO best practices:
    - `docs/templates/checklists/seo-check-sheet.md`

#### **PHASE 2: DO (AI Execution)**

1.  **Create Directory**: Create a new directory for the term within `app/terms/`. The directory name should be the term in kebab-case (e.g., `app/terms/cache-memory/`).
2.  **Create Page File**: Create a `page.tsx` file inside the new directory. Use the contents of `docs/templates/page-template.tsx` as a structural reference.
3.  **Populate Metadata**: Based on the primary keyword and the loaded SEO context, populate the `metadata` object within `page.tsx`. Ensure `title` and `description` are unique and optimized.
4.  **Write Placeholder Content**: Add basic placeholder content and structure to the article body.
5.  **Request Human Review**: Present the path to the created file to the Human. State that the basic structure is complete and ask the Human to review and add the main article content.
6.  **Update Search Index**: After the Human confirms that the content has been added, execute the `build-index` command to update the site's search index.
    ```bash
    npm run build-index
    ```
7.  **Verify and Confirm**: Verify the command was successful and confirm completion to the Human.

#### **PHASE 3: CHECK (AI-Human Interaction)**

1.  **Initiate Check**: This phase is initiated by a Human prompt (e.g., "Check SEO for the term 'Cache'"). This should be done a few days after the page is published and indexed.
2.  **Preliminary Search**: Use the `google_web_search` tool with the primary keyword to get an estimated, public search ranking.
3.  **Prompt Human for Data**: Request precise data from Google Search Console. Use the following prompt format:
    > "To accurately track performance, please provide the following from Google Search Console for the keyword **'[keyword]'**:
    > - Current Rank:
    > - Clicks:
    > - Impressions:
    > - CTR (%):"

#### **PHASE 4: ACT (AI Execution)**

1.  **Receive Data**: Await the data from the Human.
2.  **Read Tracking Sheet**: Read the contents of `docs/templates/checklists/seo-keyword-tracking-sheet.md`.
3.  **Append Record**: Append the new data as a new row in the appropriate table within the tracking sheet. Use the Markdown table format.
4.  **Confirm Completion**: Inform the Human that the SEO tracking data has been recorded.

---

### WORKFLOW: Periodic SEO Review

This workflow is initiated when the Human requests a periodic SEO check (e.g., "SEチェックする", "Perform an SEO check").

1.  **Acknowledge Request**: Acknowledge the SEO check request.
2.  **Load Context**: Read the following files to gather all necessary information:
    - `docs/templates/checklists/seo-check-sheet.md`
    - `docs/templates/checklists/seo-keyword-tracking-sheet.md`
3.  **Analyze Data**:
    - Summarize the current performance based on the `seo-keyword-tracking-sheet.md`. Identify:
        - Top 3 performing keywords (by clicks or rank).
        - Any keywords that have significantly dropped in rank.
        - Keywords with high impressions but low CTR.
4.  **Generate Suggestions**:
    - Based on the analysis and the best practices from `seo-check-sheet.md`, generate 1-3 concrete, actionable suggestions for improvement.
    - **Example Suggestion**: "The keyword 'API とは' has high impressions but a low CTR of [X]%. According to the SEO checklist, improving the `description` metadata can increase clicks. I suggest updating the description for `/terms/api/page.tsx` to be more compelling."
5.  **Present Findings**: Report the summary of the analysis and the actionable suggestions to the Human.

---

### WORKFLOW: Generate Hero Image for Term Page

This workflow is initiated when the Human requests image generation (e.g., "画像生成して", "Generate an image for [term]").

#### **PHASE 1: LOAD RULES**

1. **Read Image Generation Workflow**: Load the workflow rules:
   - `docs/image-generation-claude-workflow.md`
2. **Read DALL-E 3 Rules**: Load the DALL-E 3 project rules:
   - `docs/image-generation-dalle3-rules.md`

#### **PHASE 2: UNDERSTAND THE TERM**

1. **Read Term Page**: Read `app/terms/{term-name}/page.tsx` to understand the concept
2. **Confirm Understanding**: Ask the Human to confirm your understanding of the term

#### **PHASE 3: PROPOSE SYMBOLS**

1. **Generate Symbol Proposal**: Propose 3 visual symbols that represent the term
2. **Suggest Color Scheme**: Propose base color (blue tones) and accent colors
3. **Describe Atmosphere**: Suggest the mood/tone of the image
4. **Request Approval**: Wait for Human confirmation or feedback

#### **PHASE 4: CREATE DALL-E 3 PROMPT**

1. **Generate Prompt**: Using the template from `image-generation-dalle3-rules.md`, create a detailed DALL-E 3 prompt
2. **Include Required Elements**:
   - Size: 1792x1024px
   - Main character: Japanese woman, 20s, brown shoulder-length hair, casual white/pastel clothing, laptop
   - Background: Blue gradient, simple, digital theme
   - Symbols: Maximum 3, as approved
   - Style: Anime/manga style, soft lighting, professional but approachable
   - Prohibition: NO text, NO letters, NO words
3. **Present Prompt**: Show the complete prompt to the Human with a checklist

#### **PHASE 5: AWAIT IMAGE GENERATION**

1. **Instruct Human**: Ask the Human to:
   - Generate the image using DALL-E 3
   - Save to `images/{term-name}-hero.png`
   - Confirm when ready

#### **PHASE 6: IMPLEMENT IMAGE**

1. **Copy to Public**: Copy image from `images/` to `public/images/terms/`
2. **Update Page File**: Modify `app/terms/{term-name}/page.tsx`:
   - Add `import Image from 'next/image'`
   - Add OGP metadata with image
   - Add hero image component after TermHeader
3. **Use Standard Styling**:
   ```tsx
   <div style={{
     width: '100%',
     maxWidth: '900px',
     margin: '2rem auto',
     borderRadius: '12px',
     overflow: 'hidden',
     boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
     maxHeight: '300px'
   }}>
     <Image
       src="/images/terms/{term-name}-hero.png"
       alt="{term description}"
       width={1200}
       height={630}
       priority
       style={{
         width: '100%',
         height: '100%',
         objectFit: 'cover',
         objectPosition: 'center',
         display: 'block'
       }}
     />
   </div>
   ```
4. **Confirm Completion**: Inform the Human that implementation is complete and provide the local dev URL

#### **SPECIAL CASES**

- **Multiple Characters**: Remind the Human that only the main character (brown-haired woman) should have a visible face. Others must be back-facing or silhouettes.
- **Complex Diagrams**: Suggest simplification to max 3 symbols/icons
- **Text Requests**: Firmly state that NO text is allowed due to DALL-E 3 limitations

---
