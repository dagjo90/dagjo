# My Resume

Ce repository contient différents projets en front end.

* [Mon CV](https://dagjo90.github.io/Learning-environement/mon-cv/)
* [Le ravintola](https://dagjo90.github.io/Learning-environement/Resto)
* [Plants in a Box](https://dagjo90.github.io/Learning-environement/Plant/index.html)
* [Le Retro Vision](https://dagjo90.github.io/Learning-environement/cinema/index.html)

## Mes projets en JavaScript

* [Horloge en JavaScript](https://dagjo90.github.io/Learning-environement/clock/index.html)
* [Quizz aléatoire](https://dagjo90.github.io/Learning-environement/quiz/index.html)
* [Super Cube Boy v 1.0](https://dagjo90.github.io/Learning-environement/game/index.html)
* [Super Cube Boy v 2.0](https://dagjo90.github.io/Learning-environement/platform/index.html)

## Mes projets commerciaux

* [La maison de jeunes de Basse-Enhaive (projet Wordpress, en cours)](http://be-mj.be)

# Description des projets :

## Le ravintola 

Pour ce premier projet, j’ai décidé de réaliser le site d’un restaurant. Je voulais créer quelque chose de simple et de sobre tout en gardant un coté "site réel". Pour le contenu, je me suis inspiré d’autres restaurants.  

Ce projet m’a permis d’utiliser la propriété **"z-index"** et <strong>"position"</strong> pour créer une une barre
d’infos rapides toujours visible meme en descendant sur la page (cette particularité est surtout visible sur page d’infos pratiques). C’est aussi sur ce site que j’ai appris à utiliser le sélecteur **:active"**, couplée à la propriét **«top»**  afin de donner l’impression de cliquer sur un bouton lorsqu’on active un lien. C’était aussi l’occasion de tester l’implémentation de **google maps** dans la section infos pratiques.  

[Le ravintola](https://dagjo90.github.io/Learning-environement/Resto)

## Plants In a Box

Pour ce projet, j’avais l’idée de créer un site de commerce en ligne, ma petite  amie m’a donnée l’idée de "Plants In A Box" pour lequel j’ai tenté de donner un look qui évoque la nature, notamment à travers les couleurs.  

C’est avec ce site que j’ai découvert l’application "CSS Color Wheel" d’Adobe qui permet de trouver des couleurs complémentaires ou de décliner les couleurs d’un même ton facilement. Sur ce site, j’ai appris à utiliser le selecteur <strong>":hover"</strong> et la <strong>superposition</strong> de cases au sein d’une Grid pour créer un effet simple mais qui donne un aspect dynamique au site.  

Par la suite, j'ai ajouté un <strong>panier dynamique</strong> permettant de transmettre des données entre différentes pages à l'aide de la propriété <strong>"localStorage"</strong> et <strong>"JSON"</strong>. Il est donc possible d'ajouter des articles au panier depuis la page d'accueil et de les retrouver dans le panier. Il est aussi possible de diminuer le nombre d'articles ou de les supprimer.

[Plants in a Box](https://dagjo90.github.io/Learning-environement/Plant/index.html)

## Retro-vision

En tant que cinéphile, c’est l’une des premières idées qui  m’est venue à l’esprit. C’était l’occasion pour moi de mettre en avant une partie de ma personnalité et de mettre en pratique tout ce que j’avais appris jusqu’ici.  
          
J’ai appris à utiliser les <strong>"media quieries"</strong> afin que le site utilise la résolution disponible à son avantage pour afficher son contenu. Le site est plus large sur les écrans de <strong>1080p</strong> et plus étroit sur les écrans de plus <strong>basse résolution</strong>. C'était aussi l’occasion de travailler les <strong>tableaux HTML</strong> pour la création d’un horaire.  

J'ai ensuite ajouté un <strong>script</strong> permettant de rendre l'horaire des séances dynamique. L'horaire met en évidence les films qui seront projetés dans la journée selon la date et l'heure.

[Le Retro Vision](https://dagjo90.github.io/Learning-environement/cinema/index.html)

## L'horloge en JavaScript

Pour mon tout premier projet en JavaScript, j’ai voulu travailler quelque chose de simple que je pouvais améliorer par moi-même. Je me suis donc inspiré d’un modèle d’horloge que j’ai retravaillé par la suite.  

Le modèle initial m’a appris lier un **script** JS a une page HTML et associer des variables JavaScript à des éléments HTML. Il m’a aussi permis de travailler les **fonctions** JS.  

Le modèle de base étant très simpliste,j’ai donc ajouté des **conditions** au sein de la fonction d’affichage de l’heure afin d’ajouter automatique un « 0 » quand la valeur des heures, des minutes et des secondes étaient inférieure à 10. Dorénavant, l’horloge compte de 01 à 09 plutôt que 1 à 9.  

[Horloge en JavaScript](https://dagjo90.github.io/Learning-environement/clock/index.html)

## Super Quizz

Pour ce deuxième projet en JS, je voulais m’attaquer à quelque chose de plus complexe.
L’idée d’un quiz me semblait idéale pour mettre en pratique ce que j’avais appris sur les
objets et les <strong>"arrays"</strong>.  

J’ai repris comme base un quiz simple qui proposait une suite fixe de 10 questions et donnait le score au joueur à la fin du jeu. J’ai décidé d’améliorer le jeu en proposant un <strong>contenu aléatoire</strong>. J’ai créé un paquet de 20 questions au total et une <strong>fonction</strong> qui permet de sélectionner aléatoirement 10 questions dans ce paquet.  

Créer cette fonction m’a permis d’utiliser un <strong>"while loop"</strong> pour selectionner et ajouter 10 questions dans un <strong>nouvel array</strong> avec la methode <strong>".push()"</strong> tant qu’il n’en comportait pas 10. Pour que cette selection soit aléatoire j’ai tiré aux sorts différents numéros d’index pour l’array initial en utilisant les méthodes <strong>"Math.random"</strong> et <strong>"Math.floor"</strong>.  Afin de ne pas sélectionner la même question plusieurs fois, j’ai ajouté une <strong>condition</strong> a l’aide de la méthode <strong>".includes()"</strong> pour vérifier si la nouvelle question ne se trouvait pas déjà dans Le nouvel array.

[Quizz aléatoire](https://dagjo90.github.io/Learning-environement/quiz/index.html)

## Super Cube Boy

Très rapidement, l’envie m’est venue de réaliser un jeu de plateforme simple, qui me permettrait d’apprendre programmer le <strong>contrôle</strong> d’un personnage, un peu de <strong>physique</strong> et du <strong>scrolling</strong>. Je me suis d’abord lancé le défi de m’appuyer uniquement sur mes connaissances et de voir jusqu’où je pouvais aller seul. Malgré ses limites et ses lacunes, j’ai réussi à créer un petit jeu fonctionnel, avec un ennemi et son <strong>pattern</strong>, avec des <strong>collisions</strong>, des conditions de défaite et de victoire.  

[Super Cube Boy v 1.0](https://dagjo90.github.io/Learning-environement/game/index.html)

 J’ai ensuite décidé d’améliorer cette base, j’ai utilisé la <strong>fonction loop</strong> et j’ai appris à rendre les mouvements du personnage plus agréables et <strong>plus fluides</strong>, à améliorer le pattern des ennemis, à prendre en compte plusieurs inputs en utilisant les <strong>"Event Listeners"</strong> ce qui aide considérablement la gestion des sauts. J’ai aussi appris  à centrer le canvas sur le personnage et à arrêter le <strong>scrolling</strong> en arrivant à la fin du niveau.  

J’en ai profité pour créer un <strong>level design</strong> plus long et un peu plus esthétique en utilisant les options à ma dispositions avec le canvas, j’ai ajouté des conditions de victoires et de game over plus abouties et un peu de <strong>sons</strong> trouvés sur freesound.org.

[Super Cube Boy v 2.0](https://dagjo90.github.io/Learning-environement/platform/index.html)
