const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');
const JavaScriptObfuscator = require('javascript-obfuscator');
const { globSync } = require('glob');

async function build() {
    const rootDir = process.cwd();
    const distDir = path.join(rootDir, 'dist');

    console.log('🚀 Starting build process...');

    // 1. Clean dist directory
    if (fs.existsSync(distDir)) {
        console.log('🧹 Cleaning dist directory...');
        fs.removeSync(distDir);
    }
    fs.ensureDirSync(distDir);

    // 2. Copy files (excluding node_modules, etc.)
    console.log('📦 Copying files to dist...');
    fs.copySync(path.join(rootDir, 'assets'), path.join(distDir, 'assets'));
    fs.copySync(path.join(rootDir, 'docs'), path.join(distDir, 'docs'));
    fs.copySync(path.join(rootDir, 'index.html'), path.join(distDir, 'index.html'));

    // Copy CV if it exists in root (check if it's referenced in index.html)
    // In index.html line 147: href="assets/cv.pdf" - so it's already in assets.

    // 3. Build CSS with Tailwind
    console.log('🎨 Building CSS...');
    try {
        execSync('npx tailwindcss -i ./assets/css/input.css -o ./dist/assets/css/style.css --minify', { stdio: 'inherit' });
    } catch (err) {
        console.error('❌ Tailwind build failed:', err.message);
    }

    // 4. Obfuscate JS files
    console.log('🛡️  Obfuscating JS files...');
    const jsFiles = globSync('dist/assets/js/**/*.js');

    for (const file of jsFiles) {
        console.log(`   - Processing ${file}`);
        const code = fs.readFileSync(file, 'utf8');
        const obfuscationResult = JavaScriptObfuscator.obfuscate(code, {
            compact: true,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 0.75,
            deadCodeInjection: true,
            deadCodeInjectionThreshold: 0.4,
            debugProtection: false,
            debugProtectionInterval: 0,
            disableConsoleOutput: false,
            identifierNamesGenerator: 'hexadecimal',
            log: false,
            numbersToExpressions: true,
            renameGlobals: false,
            selfDefending: true,
            simplify: true,
            splitStrings: true,
            splitStringsChunkLength: 10,
            stringArray: true,
            stringArrayCallsTransform: true,
            stringArrayCallsTransformThreshold: 0.75,
            stringArrayEncoding: ['base64'],
            stringArrayIndexesType: [
                'hexadecimal-number'
            ],
            stringArrayRotate: true,
            stringArrayShuffle: true,
            stringArrayWrappersCount: 2,
            stringArrayWrappersChainedCalls: true,
            stringArrayWrappersParametersMaxCount: 4,
            stringArrayWrappersType: 'function',
            stringArrayThreshold: 0.75,
            transformObjectKeys: true,
            unicodeEscapeSequence: false
        });

        fs.writeFileSync(file, obfuscationResult.getObfuscatedCode());
    }

    console.log('\n✅ Build completed! Files are in the "dist" folder.');
}

build().catch(err => {
    console.error('❌ Build failed:', err);
    process.exit(1);
});
