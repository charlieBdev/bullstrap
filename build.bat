@echo off
echo Building Iris Theme...
.\compiler\sass.bat --quiet-deps scss/iris.scss css/iris-bootstrap.css
echo Building HSES Theme...
.\compiler\sass.bat --quiet-deps scss/hses.scss css/hses-bootstrap.css
echo All themes updated!
pause