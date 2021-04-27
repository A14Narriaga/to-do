import pathlib
import shutil

htmlFile = open("build\index.html", "r")
data = htmlFile.read()
htmlFile.close()
data = data.replace('src="/', 'src="build/')
data = data.replace('href="/', 'href="build/')
data = data.replace('src="./', 'src="build/')
data = data.replace('href="./', 'href="build/')
htmlFile = open("build\index.html", "w")
htmlFile.write(data)
htmlFile.close()
shutil.move("build\index.html", "index.html")