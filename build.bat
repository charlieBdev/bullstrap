@REM May have to highlight and run one by one if only does first one

echo Building Deskbooker Theme...
.\compiler\sass.bat scss/deskbooker.scss css/deskbooker-bootstrap.css
echo Deskbooker done.

echo Building HSES Theme...
.\compiler\sass.bat scss/hses.scss css/hses-bootstrap.css
echo HSES done.

echo Building Iris Theme...
.\compiler\sass.bat scss/iris.scss css/iris-bootstrap.css
echo Iris done.

echo Building Portal Theme...
.\compiler\sass.bat scss/portal.scss css/portal-bootstrap.css
echo Portal done.

echo Building Quality Theme...
.\compiler\sass.bat scss/quality.scss css/quality-bootstrap.css
echo Quality done.

echo Build complete!