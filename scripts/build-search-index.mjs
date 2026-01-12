import fs from 'fs';
import path from 'path';

const termsDir = path.join(process.cwd(), 'app/terms');
const outputDir = path.join(process.cwd(), 'public');
const outputFile = path.join(outputDir, 'search-index.json');

function findTermPages(dir) {
    let termPages = [];
    const items = fs.readdirSync(dir, { withFileTypes: true });

    for (const item of items) {
        const fullPath = path.join(dir, item.name);
        if (item.isDirectory()) {
            const pagePath = path.join(fullPath, 'page.tsx');
            if (fs.existsSync(pagePath)) {
                termPages.push(pagePath);
            }
        }
    }
    return termPages;
}

function extractMetadata(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');

        // Try to extract metadata export first
        const metadataBlockMatch = content.match(/export const metadata: Metadata = \{([\s\S]*?)\};/);

        let titleMatch, descriptionMatch;

        if (metadataBlockMatch) {
            const metadataBlock = metadataBlockMatch[1];
            titleMatch = metadataBlock.match(/title:\s*['"]([^'"]+)['"]/);
            descriptionMatch = metadataBlock.match(/description:\s*['"]([^'"]+)['"]/);
        } else {
            // For 'use client' pages, try to extract from TermHeader and first <p> tag
            const termHeaderMatch = content.match(/termName=["']([^"']+)["']/);
            const firstPMatch = content.match(/<p>\s*<strong>([^<]+)<\/strong>[^<]*とは[^<]*<strong>([^<]+)<\/strong>/);

            if (termHeaderMatch) {
                const termName = termHeaderMatch[1];
                let description = '';

                if (firstPMatch) {
                    description = `${firstPMatch[1]}とは${firstPMatch[2]}`;
                }

                titleMatch = [null, `${termName}とは？初心者向けにわかりやすく解説 | 実践型IT用語辞典`];
                descriptionMatch = [null, description || `${termName}について、初心者向けにわかりやすく解説します。`];
            }
        }

        if (titleMatch && descriptionMatch) {
            const appDir = path.join(process.cwd(), 'app');
            const relativeDir = path.relative(appDir, path.dirname(filePath));
            const termPath = '/' + relativeDir.replace(/\\/g, '/'); // Normalize for windows

            return {
                title: titleMatch[1],
                description: descriptionMatch[1],
                path: termPath
            };
        }
    } catch (error) {
        console.error(`Error processing file ${filePath}:`, error);
    }
    return null;
}

function buildIndex() {
    console.log('Starting to build search index...');
    
    if (!fs.existsSync(termsDir)) {
        console.log(`Terms directory not found at ${termsDir}. No index will be built.`);
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }
        fs.writeFileSync(outputFile, JSON.stringify([], null, 2));
        return;
    }

    const termFiles = findTermPages(termsDir);
    const indexData = [];

    for (const file of termFiles) {
        const metadata = extractMetadata(file);
        if (metadata) {
            indexData.push(metadata);
        }
    }
    
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(outputFile, JSON.stringify(indexData, null, 2));
    console.log(`Search index built successfully with ${indexData.length} items.`);
    console.log(`File saved to: ${outputFile}`);
}

buildIndex();