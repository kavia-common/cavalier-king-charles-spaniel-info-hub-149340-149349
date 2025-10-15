#!/bin/bash
cd /home/kavia/workspace/code-generation/cavalier-king-charles-spaniel-info-hub-149340-149349/about_page_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

