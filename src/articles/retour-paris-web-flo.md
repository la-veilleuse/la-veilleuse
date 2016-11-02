---
title: Retour sur Paris Web 2016
author: Florent Berthelot
date: 2016-10-31
draft: true
---

Chaque année et ce depuis 11 ans à Paris, a lieu une Conférence Majeur : **Paris Web**. La bien nommée tire sa particularité dans le rassemblement des développeurs et des UX/UI designer, bref de tous ceux qui font le web d'aujourd'hui. L'occasion idéal de s'éloigner un peu de ma mission actuel de développeur back-end et de prendre du recul sur le net en général.

De plus un fort accent est mis sur l'accessibilité.tous les talks sont traduit en langue des signe, une vélotypie est proposé sur la grande scène et même le traiteur - très fameux par ailleurs, la meilleur congrès en terme de nourriture - respecte l'accessibilité et propose des emplois accessible à tous. Je me demande d'ailleurs pourquoi les autres gros rendez-vous ne propose pas des traductions en langue des signes. Reveillez-vous !

Dans cette article, je vais faire un retour presque entièrement chronologique de mon premier Paris Web. N'hésitez pas de picorer les sujets qui vous intéressent et si vous voulez approfondir le sujet les liens vers les slides (quand disponible sont présent) sont présent. *Je mettrai à jour cet article quand le replay sera disponible.*

## Jeudi

### Anatomie d'une désintoxication au Web sous surveillance - Thibault Jouannic

Nous le savons tous, Facebook, Google, Amazon, Apple (GAFA) et consort autres sont partout sur le web. Par le biais de boutons like, de script d'analyse de trafic, ... Partout et sur quasiment toutes les pages du web ! Nous le savons tous, surtout nous qui travaillons dans le web et pourtant on ne fait rien et nous les intégrons même à nos page web.

[Thibault Jouannic](https://twitter.com/thibaultj?lang=fr) dans sa [conférence de sensibilisation](https://www.miximum.fr/blog/conf-pw-2017/) nous invite à nous poser les bonnes questions. Pour lui, et je partage son avis, toutes les informations des utilisateurs sont sensibles même celles qui ne le paraisse pas. Il a pris son propre exemple : son adresse est affiché publiquement sur le web, normal il est freelance et c'est aussi l'adresse de sa société. Oui mais sa femme travail dans une prison et les détenus pourrai potentiellement retrouver leurs adresse par ce biais. Cette exemple montre bien que les informations aussi "anodine" qu'un adresse peuvent être sensible. Si toutes les informations sont sensible alors pourquoi les rendre accessible à nous-même ou même pire aux GAFA ?

Personnellement la prochaine fois que je ferai un site avec des données utilisateur a stocké en base de donnée, je me poserai la question : *"est-ce vraiment utile que je stock cette information précisément ?"*. Par exemple pourquoi ne pas stocker la tranche d'age plutôt que la date de naissance. Je me poserai aussi la question, ai-je vraiment besoin de mettre google analytic, les logs de mes serveur ne peuvent-ils pas suffire. Bref, posons nous les questions et respectons au maximum la vie privée, c'est notre devoir !

### Y'a pas d'avancement, pas de grimaces ! - Thomas Gasc

[Thomas Gasc](https://twitter.com/methylbro?lang=fr) nous a fait un retour d’expérience sur l'amélioration du tunnel de vente. Il détail en pas moins de 29 conseils pour rassurer l'utilisateur et le faire passer le tunnel sans crainte et avec plaisir. Mais il est aussi allé un peu plus loin pour essayer de fidéliser les clients. Je vous laisse découvrir [ses conseils ici.](https://speakerdeck.com/methylbro/ya-pas-davancement-pas-de-grimaces)

### Lancer son site à l'international facile ? Oui, si l'on pense à tout !

Personnellement quand je pense site web international je pensais instinctivement à la traduction de chaîne de caractères, la traduction de devise et de date. Mais ça, c'était avant qu'[Aurélie Guillaume](https://twitter.com/slig36) nous a liste toutes [ce à quoi il faut penser pour développer un site web 100% international](https://speakerdeck.com/slig36/lancer-son-site-a-linternational-facile-oui-si-lon-pense-a-tout%29).

Je peux vous dire qu'en plus de la simple traduction il faut, par exemple, pouvoir changer les paramètres de validation d'un formulaire en fonction de la langue. En effet, certain prénom peuvent être coder sur 1 ou 2 caractères dans certaines langue (Japonais, Chinois, ...).

Le design doit -idéalement - aussi changer en fonction de la langue pour permettre un lecture de droite a gauche ainsi qu'une lecture de gauche à droite aisé. Le site marocain de [2M](http://www.2m.ma/), en est un bon exemple, ils ont choisi d'effectuer un effet miroir complet entre l'arabe et le français.
Il faut également prendre en compte la loi et les différents contexte géopolitique. En chine, il faut obligatoirement un serveur sur leur territoire pour être en règle. Toujours dans le même pays nous ne pouvons pas utiliser les services de google (google étant bloqué dans ce pays).

Bref comme d'habitude, il faut penser à tout et je garde précieusement les slides, je suis certain qu'il m'éviterons d'oublier des éléments pour lancer un site hors de mes frontières.

### La blockchain, quand l'individu sert au collectif... malgré lui

La BlockChain, c'est tendance, je dirais même sur le début de la courbe du hype et pourtant [François Zaninotto](https://twitter.com/francoisz?lang=fr) a réussi à nous présenter son sujet avec un esprit critique et une vrai expérience sur le sujet.
Je ne vais pas vous paraphraser sa conférence ici, je vous conseil vivement d'allez jeter un coup d'oeil au replay ou même ses slides quand ils seront disponible.

L'ancien CTO de eTF1 - je suis actuellement en mission là-bas et j'ai découvert que c'est prédécesseur de mon patron actuel en écrivant cet article - nous a permis dans un première partie d'effleurer et d'appréhender ce qu'est la blockchain et dans un second temps nous a expliqué leurs défauts - je m'attarde par la suite sur les défauts, des connaissances sur la blockchain sont nécessaire.

La blockchain, c'est lent. En effet, avant qu'un nouveau document rentre dans "le système" il faut 30 secondes pour le bitcoin de fois mois pour d'autres système. Une fois le block dans "le système" il faut qu'il se propage aux autres noeud du réseau. Quand on compare a ce que l'on a actuellement, plus de 30 secondes pour avoir un nouveau document c'est très très lent. On ne peut pas compter sur une application utilisant la block-chain de bout en bout.

La blockchain ne s'applique pas a tout non plus, si l'on vous parle de blockchain en réseau privée où est l'interêt ? La blockchain c'est parfait pour obtenir des certificats signé et approuvé par tous, pour gérer un monnaie, pour avoir un système de vote, pour tous ce qui réclame une autorité quand personnes ne se fait confiance mais certainement pas pour tout. L'important est donc de prendre du recul, avoir un esprit critique avant de se lancer dedans. François Zaninotto m'a permis d'avoir un peu plus de recul, merci.

### Organisez des cryptoparties !

En décembre 2012, à Honolulu au fond d'un magasin, un inconnu prend la première fois la parole en publique pour parler de la surveillance que la NSA fait sur l'ensemble des humains via internet. Six mois plus tard, cette homme est a Honk-kong et va dévoiler aux journalistes ce qu'il sait. Cette homme, c'est Edouard Snowden.

Cette histoire montre que tout est parti d'un cryptoparty - ou chiffro fête en français - à Hawaii. Les Cryptoparty sont des sortes de Meetup ouvert à tous - le but est justement de sensibiliser le plus grand monde à la sécurité informatique - où l'on parle de sujet de sécurité diverse. [Xavier Mouton-Dubosc](https://twitter.com/dascritch) nous a alors inviter à en organiser ou du moins à y participer.

### The Invisible Interface: Designing the Screenless Experience

Conférence que je qualifierai comme intéressante et dérangeante. Je m'explique, la première partie était très bien et [Avi Itzkovitch](https://twitter.com/xgmedia) nous a expliqué pourquoi la meilleur expérience utilisateur d'un produit technologique se faisait sans écran. L'exemple des portes des magasins qui s'ouvre automatiquement quand on s'approche de la porte en est un bon exemple, l'utilisateur n'a pas besoin de réfléchir pour ouvrir la porte. Je vous conseil vraiment la première partie de son talk.

Néanmoins, la seconde partie n'était qu'une succession de pub pour des objets connectées. Ces objet faisait un peu peur dans leurs côté intrusif, Skynet est déjà là et ces petits objets nous observent, de quoi devenir méfiant et paranoïaque.

### Informel - Skynet se planque dans mon frigo! Retour sur la conf Internet des objets : évolution ou régression?

Et oui, en plus d'offrir deux track simultanés, Paris Web propose des informels. Le principe ? un troisième track d'un sujet non-officiel et animé par un participant de Paris Web. Les sujets sont proposé au cours de ces deux jours, de quoi éviter une conférence et favoriser la discutions entre tous les participants. Même s'ils n'y a pas eu beaucoup de sujet proposé, malgré tout je peux vous en citer deux : "Vers un web plus inclusif" et "Skynet blah blah". Le premier a beaucoup fait parlé - j'en ai entendu parlé alors que je n'ai pas twitter et que je n'y était pas. Personnellement, j'ai participé au second.

[Nathalie Rosenberg](https://twitter.com/nrosenberg), organisatrice de sub web notamment,   a pris comme point de départ la conférence de [Avi Itzkovitch](https://twitter.com/xgmedia) : *The Invisible Interface: Designing the Screenless Experience* ; pour expliquer que l’enchaînement de pub montrait des produits de plus en plus intrusif dans nos vie privée. La discussion était vraiment intéressante, nous y avons parlé notamment de l'effet pervers du "je n'ai rien a caché", des GAFAs, des mails non protégé, de notre rôle dans tout ça. Bref je l'ai vécu comme une mini-cryptoparty et j'ai aimé. Merci au participants.

### Le monde physique, les beacons, le web mobile et vous

[Jen looper](https://twitter.com/jenlooper?lang=fr) nous a montrer comment elle s’amuse avec les beacons. Ces petits capteur qui - a mon grand malheur - peuvent faire sonner mon téléphone dans une boutique pour me dire que le produit que je regarde est en promotion. C'est petits objets très intrusif peuvent aussi s'avérer un peu plus utile, ils peuvent pour par exemple servir pour faire une chasse au trésors, informer les visiteurs d'un musée sur les oeuvres qu'ils regardent. Bref, je vous laisse [découvrir la présentation](https://www.dropbox.com/s/hbdk9y7kz9lhmil/beacons_plants_boxes.pptx?dl=0) toute en légèreté et 100% fait main.

### Il n'y a pas que class et id dans la vie

Excellente conférence, une des plus technique que j'ai vu durant ces deux jours. Pour faire très simple [Gaẽl Poupard](https://twitter.com/ffoodd_fr?lang=fr) nous a expliqué [pourquoi les intégrateur n'utilisent quasiment que `class` et `id` comme sélecteur CSS](http://www.ffoodd.fr/paris-web/index-transcript.html). Historiquement ces sélecteurs était plus rapide les plus rapide, aujourd'hui, ce n'est plus vraiment le cas. Donnons nous alors a cœur joie d'utiliser les sélecteurs universel, d'attributs, d'adjacence et de parenté et autres joyeuseté très peu utilisé !

Mais c'est un autre concept présenté qui a retenu toute mon attention : pourquoi ne pas faire une feuille de style css qui force les développeurs de remplir du code HTML sémantique et accessible. Exemple :

```css
html[lang] {
  box-sizing: border-box;
}
```
Ici, au lieu d'avoir un sélecteur uniquement sur l'élément `html`  on précise que l'élément html doit avoir un attribut `lang`, sinon l'affichage sera cassé. Brillant, non ? Moi j'adore !

### Questionnements sur l'Internet prêt-à-porter

Et le clou du spectacle d'un première journée bien chargé, la présentation d'[Amélie Boucher](https://twitter.com/amelieboucher?lang=fr) sur le prêt-à-porter du web. Le postulat est simple, aujourd'hui bon nombre de site se ressemble et la tendance est en train de s'accroitre. Pouquoi ?est-ce que c'est mal ? Comment faire différent ?
Sans réellement amener de réponse clair, elle a fait prendre un peu de recule sur le design à l'assemblée. Je vous conseil vraiment de voir le replay quand il sortira de cette conférence et mince ! Engagez des UX et des designers, osez faire différent, démarquez-vous !

Cette conférence a permis de renforcer mon envie de m'investir d'avantage dans l'agence numérique [AYA](www.aya-experience.com) qui est en train d'être monter au sein de Zenika, car j'en ai vraiment marre d’enchaîner les projets et de retrouver toujours les même design.

## Vendredi

### L'accessibilité décomplexée - ce qu'elle peut faire pour vous

[Nicolas Hoffmann](https://twitter.com/nico3333fr?lang=fr) - auteur de [plugins Jquery](https://a11y.nicolas-hoffmann.net/) nous a expliqué pourquoi nous devions faire de l’accessibilité et rentre nos sites accessible. Même si l'auditoire de Paris Web est a mon sens déjà acquis a la cause je pense que [la piqûre de rappel](https://www.nicolas-hoffmann.net/paris-web-2016-accessibilite-decomplexee/#/) n'a pas fait de mal.

### Ne passons pas a côté des choses simples

J'ai déjà eu l'occasion d’expérimenter des technologies comme **metalsmith** ou **jekyll**, des générateur de site statique. Leurs principes est de faire des site web avec un peu du HTML, de CSS et du JS. L'édition de contenu se fait alors directement sur git. C'est très bien car je suis un développeur et je sais écrire du markdown du html, css et du JS. Les processus de git sont en plus parfaitement adapté, je fait des PR avant de publié une nouvelle page en la faisant relire par quequ'un d'autre. En plus, c'est économique, je peux héberger ce genre de site sur une github page !

Oui, mais ma mère - ou tout autre personne non technique - ne pourrai pas éditer une page sur mon site statique, elle serai perdu. C'est là que [la présentation](http://frank.taillandier.me/presentations/ne-passons-pas-a-cote-des-choses-simples/) de [Frank Taillandier](http://frank.taillandier.me/) et de [Bertrand keller](http://bertrandkeller.info/) m'a permis d'ouvrir ma vision des possibilités offerte par les sites statique à l'infini. En effet, de nouveaux CMS qui se basent sur les API de GitHub - voir un autre VCS - émergent. Cette nouvelle manière de concevoir des sites web économique, s'appel la JAMStack. 

Se basant sur les processus d'éditions de documents éprouvé de git et des API des services comme GitHub, ces CMS n'ont même pas besoin de base de donner. Tout est static de bout en bout (certes, sauf les API du VCS) et c'est beaucoup plus simple, non ? **K.I.S.S** !

### Une graphiste parmi les devs

[Florie Séchaud](https://twitter.com/floriesd) a fait un retour d'expérience sur sa propre expérience. Elle est dev et graphiste. Engagé comme dev, ses talents de graphiste ont ainsi permis d’améliorer le produit. Le côté intéressant de sa conférence est comment elle s'est fait accepté comme graphiste dans l'équipe. Pour moi, une équipe qui fait du développement web doit (dans 80% des cas - les back-office n'ont pas forcément besoin d'être joli, même si...) comporter un UX/designer au même titre que des développeur !

### HTML5.1 + web platform APIs

Pour vous dépeindre cette conférence par écrit, je vous demande de faire appel a votre mémoire et imagination. Imaginez une documentation W3C de 300 pages, si vous ne voyez pas imaginez une spec d'engin militaire révolutionnaire datant des années 1950. Ça sens la poussière, ça donne pas envie de lire mais pourtant le contenu est souvent intéressant. La présentation de Charles McCathieNevile et Léonie Watson - tous deux membre du W3C - suivait le même principe. Aucune mise en forme des slides, - Ils l'aurais fait sur un notepad que ça ne m'aurais pas choquer - une démonstration sur 10 qui marche et pourtant le contenu était vraiment bien !

Ils ont d’abord fait une revu des nouvelles API disponible et moi qui adore toutes ces API, qui étendent les possibilités des applications Web j'ai simplement adoré. Au programme, une api de vibration, de gamepad, de paroles, etc. Bref, que du bon !

La deuxième partie portait plus sur les évolutions du HTML5, ce qu'ils ont abandonné et ce qu'il vont améliorer. C'était assez intéressant de se mettre à la place du W3C et de comprendre d'où viennent ces choix de langages.

### Leboncoin, les coulisses d'une refonte graphique

[Jérémie Pereira](https://www.paris-web.fr/orateurs/jeremie-pereira.php) et [Margaux Chenard](https://twitter.com/margauxchenard) nous ont présenté et fait un retour sur la refonte graphique qu'ils ont mené sur un des site le plus consulté des français. Leboncoin était un site à l'apparence très vieillotte et surtout absolument pas responsive ! Leurs objectif était donc outre l'amélioration graphique était d'avoir un réel gain de visiteurs sur mobile.

Pour mener a bien cette refonte, j'ai aimé bien des aspects : les tests utilisateurs en condition réel (beta publique) ; la livraison par lot en production (encore actuellement tout le site responsive n'est pas livré) ; Une première phase de veille - prendre un peu de recule avant de foncer c'est très important et dans tous les domaines.

Mais ce que j'ai aimé et retenu dans leurs approche, c'est qu'il ont eu la liberté total de la part de leurs chefs et ce sont donc eux-même qui ont mené de bout en bout cette refonte. Ils ont bien entendu inclue dans l'équipe du projet pas uniquement des développeurs mais ont composé avec une équipe compétences pour essayé de rentre le meilleure site responsive possible. La pression n'est pas venu du chef mes des utilisateurs eux-même et je pense que c'est ce qui manque à beaucoup de projet.


### Le mot de la fin

C'est donc avec grande joie que j'ai participé à l'édition 2016 de Paris Web ! Le mélange entre UX/design et développement m'a vraiment plu. J'ai vu certain écrire que l'événement était en perte de vitesse, je n'y était pas avant alors je ne peut pas juger mais une conférence de 2 jours avec plusieurs tracks et des sujets intéressants, moi je vote pour ! Alors à l'année prochaine.
