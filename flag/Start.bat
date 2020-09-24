@echo off

cd ..\block\
start ..\python\FlagsBlock.exe start.py  --findprojectroot --nobrowser

cd ..\nwjs\
start nw.exe FlagsBlock
