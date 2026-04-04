@echo off
echo Installing required dependencies...
npm install lucide-react framer-motion gsap clsx tailwind-merge

echo Creating public/images folder...
if not exist "public\images" mkdir "public\images"

echo Copying images from ../Images to public/images...
xcopy "..\Images\*" "public\images\" /E /I /Y

echo Setup complete! You can now run "npm run dev" to start the Next.js app.
pause
