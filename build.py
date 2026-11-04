import sys
S='src/'
r=lambda f:open(S+f).read()
p1,p2,p3=r('part1.html'),r('part2.html'),r('part3.html')
p1=p1.replace('/*__PAPER__*/',r('paper.css'))
p3=p3.replace('//__GEN__',r('gen.js')).replace('//__TPL__',r('templates.js'))
head=p1+p2+p3

open('index.html','w').write(head)
open('test.html','w').write(head.replace('//__EXPOSE__','window.__chumi={calc,fmt,app,paperHTML,TPL,autoGenerate,writePdf,planPages,CATS,tplOf,renderPreview};'))
print(len(head))
