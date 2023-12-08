import * as fs from 'fs';
import path from 'path';

const paths = ["apps", "system", "main"]
const prefix = "docs/"

function getFilesWithMdExtension(paths) {
    const filesWithMdExtension = {};
    for (const path of paths) {
        const files = fs.readdirSync(prefix + path);
        for (let file of files) {
            if (path == "apps") {
                // Временное решение, вдруг будут другие файлы, кроме index.md
                file = file + '/index.md'
            }
            filesWithMdExtension[path + '/' + file] = file;
        }
    }
    return filesWithMdExtension
}

export const rewrites: Record<string, string> = getFilesWithMdExtension(paths);
