---
title: Retour sur Paris Web 2016
author: Florent Berthelot
date: 2016-10-31
---

Chaque année, et ce depuis 11 ans, a lieu à Paris une conférence majeure : **Paris Web**. La bien nommée tire sa particularité dans le rassemblement des développeurs et des UX/UI designers, bref de tous ceux qui font le web d'aujourd'hui. L'occasion idéale de s'éloigner un peu de ma mission actuelle de développeur back-end et de prendre du recul sur le net en général.

De plus l'accent est mis sur l'accessibilité : tous les talks sont traduits en langue des signes, une vélotypie est proposée sur la grande scène et même le traiteur - très fameux par ailleurs, le meilleur congrès en terme de nourriture - respecte l'accessibilité et propose des emplois accessibles à tous. Je me demande d'ailleurs pourquoi les autres gros rendez-vous ne proposent pas de traduction en langue des signes. Réveillez-vous !

Dans cet article, je vais faire un retour presque entièrement chronologique de mon premier Paris Web. N'hésitez pas à picorer les sujets qui vous intéressent. Si vous voulez approfondir un sujet, les liens vers les slides sont présents quand ceux-ci sont disponibles. *Je mettrai à jour cet article quand les vidéos seront disponibles.*

## Jeudi

### Anatomie d'une désintoxication au Web sous surveillance - Thibault Jouannic

Nous le savons tous, Facebook, Google, Amazon, Apple (GAFA) et consorts sont partout sur le web, par le biais notamment de boutons *like*, de scripts d'analyse de trafic, ... Partout et sur quasiment toutes les pages du web ! Nous le savons tous, surtout nous qui travaillons dans le web et pourtant on ne fait rien et nous les intégrons même à nos page web.

[Thibault Jouannic](https://twitter.com/thibaultj), dans sa [conférence de sensibilisation](https://www.miximum.fr/blog/conf-pw-2017/), nous invite à nous poser les bonnes questions. Pour lui – et je partage son avis – toutes les informations des utilisateurs sont sensibles, même celles qui ne le paraissent pas au premier abord. Il a pris son propre exemple : étant freelance, son adresse – qui est aussi celle de sa société – est affichée publiquement sur le web. Oui, mais sa femme travaille dans une prison et les détenus pourraient potentiellement retrouver leur adresse par ce biais. Cet exemple montre bien que des informations aussi "anodines" qu’une adresse peuvent être sensibles. Si toutes les informations sont sensibles, alors pourquoi les rendre accessibles à nous-même ou pire, aux GAFA ?

Personnellement la prochaine fois que je ferai un site avec des données utilisateur à conserver, je me poserai la question : *"Est-il vraiment nécessaire de stocker cette information ?"*. Par exemple, pourquoi ne pas stocker la tranche d’âge plutôt que la date de naissance ? Posons-nous les bonnes questions et respectons au maximum la vie privée, c'est notre devoir !

### Y'a pas d'avancement, pas de grimaces ! - Thomas Gasc

[Thomas Gasc](https://twitter.com/methylbro?lang=fr) nous a fait un retour d’expérience sur l'amélioration du tunnel de vente. Il dispense pas moins de 29 conseils pour rassurer l'utilisateur et le faire passer le tunnel sans crainte et avec plaisir, en approfondissant également sur les moyens de fidéliser le client. Je vous laisse [découvrir ses conseils](https://speakerdeck.com/methylbro/ya-pas-davancement-pas-de-grimaces).

### Lancer son site à l'international facile ? Oui, si l'on pense à tout !

Personnellement quand je pense *site web international* je songe instinctivement à la traduction de chaînes de caractères, de devises et de dates. Mais ça, c'était avant qu'[Aurélie Guillaume](https://twitter.com/slig36) nous liste [tout ce qu'il faut penser pour développer un site web 100% international](https://speakerdeck.com/slig36/lancer-son-site-a-linternational-facile-oui-si-lon-pense-a-tout%29).

Je peux vous dire qu'en plus de la simple traduction, il faut parfois pouvoir changer les paramètres de validation d'un formulaire en fonction de la langue. En effet, certains prénoms peuvent être codé sur un ou deux caractères dans certaines langues comme le japonais ou le chinois.

Idéalement, la disposition des éléments dans la page doit être pensée de manière à permettre une lecture aisée quel que soit le sens de lecture. Le site marocain de [2M](http://www.2m.ma/) en est un bon exemple ; ils ont choisi d'effectuer un effet miroir complet entre l'arabe et le français.
Il faut également prendre en compte la loi et les différents contextes géopolitiques. En Chine, il faut obligatoirement un serveur sur leur territoire pour être en règle. Google étant bloqué dans ce pays, nous ne pouvons également pas utiliser leurs services.

Bref, comme d'habitude, il faut penser à tout et je garde précieusement les slides, étant certain qu'ils m’éviteront d'oublier des éléments pour lancer un site hors de mes frontières.

### La blockchain, quand l'individu sert au collectif... malgré lui

La Blockchain, c'est tendance, je dirais même sur le début de la courbe du hype et pourtant [François Zaninotto](https://twitter.com/francoisz?lang=fr) a réussi à nous présenter son sujet avec un esprit critique et une vraie expérience sur le sujet.
Je ne vais pas vous paraphraser sa conférence ici, je vous conseille vivement d'aller jeter un coup d'œil au replay ou même sur ses slides quand ils seront disponibles.

L'ancien CTO de eTF1 nous a permis dans une première partie d'effleurer et d'appréhender ce qu'est la blockchain et dans un second temps nous a expliqué ses défauts. Je m'attarde par la suite sur les défauts, des connaissances sur la blockchain étant nécessaires avant de poursuivre.

La blockchain, c'est lent. En effet, avant qu'un nouveau document rentre dans le *système* il faut 30 secondes pour le Bitcoin, des fois un mois pour d'autres systèmes. Une fois le bloc dans le *système* il faut qu'il se propage aux autres nœuds du réseau. Quand on compare à ce que l'on a actuellement, plus de 30 secondes pour avoir un nouveau document c'est très lent. On ne peut pas compter sur une application utilisant la blockchain de bout en bout.

La blockchain ne s'applique pas à tout non plus, si l'on vous parle de blockchain en réseau privé, où est l'intérêt ? La blockchain c'est parfait pour obtenir des certificats signés et approuvés par tous, pour gérer une monnaie, pour avoir un système de votes, pour tout ce qui réclame une autorité, quand personne ne se fait confiance, mais certainement pas pour tout. L'important est donc de prendre du recul et d'avoir un esprit critique avant de se lancer dedans. François Zaninotto m'a permis d'avoir ce recul, merci à lui !

### Organisez des cryptoparties !

En décembre 2012, à Honolulu au fond d'un magasin, un inconnu prend la première fois la parole en public pour parler de la surveillance que la NSA exerce sur l'ensemble des internautes. Six mois plus tard, cet homme est à Hong-Kong et va dévoiler aux journalistes ce qu'il sait. Cet homme, c'est Edouard Snowden.

Cette histoire montre que tout est parti d'une cryptoparty - ou chiffro-fête en français - à Hawaii. Les Cryptoparties sont des sortes de Meetup ouverts à tous – le but étant justement de sensibiliser le plus grand monde à la sécurité informatique - où l'on parle de divers sujets centrés sur la sécurité informatique. [Xavier Mouton-Dubosc](https://twitter.com/dascritch) nous a alors invités à en organiser ou du moins à y participer.

### The Invisible Interface: Designing the Screenless Experience

Conférence que je qualifierais d'intéressante et dérangeante. Je m'explique : la première partie était très bien et [Avi Itzkovitch](https://twitter.com/xgmedia) nous a expliqué pourquoi la meilleur expérience utilisateur d'un produit technologique se faisait sans écran. L'exemple des portes des magasins qui s'ouvrent automatiquement quand on s'approche en est un bon exemple, l'utilisateur n'a pas besoin de réfléchir pour ouvrir la porte. Je vous conseille vraiment la première partie de son talk.

Néanmoins, la seconde partie n'était qu'une succession de publicités pour des objets connectés. Ces objet avaient un côté anxiogène de par leur côté intrusif. Skynet est déjà là et ces petits objets nous observent, de quoi devenir méfiant et paranoïaque !

### Informelle - Skynet se planque dans mon frigo! Retour sur la conf Internet des objets : évolution ou régression?

Et oui, en plus d'offrir deux tracks simultanées, Paris Web propose des informelles. Le principe ? Une troisième track de sujets non-officiels animés par des participants de Paris Web. Les sujets sont proposés au cours de ces deux jours, de quoi éviter une conférence et favoriser la discussion entre tous les participants. Même s'il n'y a pas eu beaucoup de sujets proposés, je peux vous en citer deux : *Vers un web plus inclusif* et *Skynet blah blah*. Le premier semble-t-il été très productif, mais je n'ai personnellement participé qu'au second.

[Nathalie Rosenberg](https://twitter.com/nrosenberg), organisatrice de Sud Web notamment, a pris comme point de départ la conférence *The Invisible Interface: Designing the Screenless Experience* de [Avi Itzkovitch](https://twitter.com/xgmedia) pour expliquer que les exemples de produits cités étaient de plus en plus intrusifs. La discussion était vraiment intéressante, nous y avons parlé notamment de l'effet pervers du "je n'ai rien à cacher", des GAFAs, des emails non protégés et de notre rôle dans tout ça. Bref, je l'ai vécu comme une mini-cryptoparty et j'ai beaucoup apprécié. Merci aux participants.

### Le monde physique, les beacons, le web mobile et vous

[Jen looper](https://twitter.com/jenlooper?lang=fr) nous a montré comment elle s’amuse avec les beacons. Ces petits capteurs qui - à mon grand malheur - peuvent faire sonner mon téléphone dans une boutique pour me dire que le produit que je regarde est en promotion. Ces petits objets très intrusifs peuvent aussi s'avérer un peu plus utiles ; ils peuvent par exemple servir pour baliser une chasse aux trésors ou pour proposer aux visiteurs d'un musée  des informations sur les œuvres qu'ils regardent. Je vous laisse [découvrir la présentation](https://www.dropbox.com/s/hbdk9y7kz9lhmil/beacons_plants_boxes.pptx?dl=0) toute en légèreté et 100% faite main.

### Il n'y a pas que class et id dans la vie

Excellente conférence, une des plus techniques que j'aie vu durant ces deux jours. Pour faire très simple, [Gaël Poupard](https://twitter.com/ffoodd_fr?lang=fr) nous a expliqué [pourquoi les intégrateurs n'utilisent quasiment que `class` et `id` comme sélecteurs CSS](http://www.ffoodd.fr/paris-web/index-transcript.html). Historiquement, ces sélecteurs étaient les plus rapides ; aujourd'hui, la différence est trop négligeable pour se priver de ce que nous apportent les autres sélecteurs. Donnons-nous alors à cœur joie d'utiliser les sélecteurs universel, d'attributs, d'adjacence et de parenté et autres joyeusetés très peu utilisés !

Mais c'est un autre concept présenté qui a retenu toute mon attention : pourquoi ne pas faire une feuille de style CSS qui force les développeurs à remplir du code HTML sémantique et accessible ? Exemple :

```css
html[lang] {
  box-sizing: border-box;
}
```
Ici, au lieu d'avoir un sélecteur uniquement sur l'élément `html`  on précise que l'élément html doit avoir un attribut `lang`, sinon l'affichage sera cassé. Brillant, non ? Moi j'adore !

### Questionnements sur l'Internet prêt-à-porter

Et le clou du spectacle d’une première journée bien chargé, la présentation d'[Amélie Boucher](https://twitter.com/amelieboucher?lang=fr) sur le prêt-à-porter du web. Le postulat est simple : aujourd'hui, bon nombre de sites se ressemblent et la tendance est à la hausse. Pourquoi ? Est-ce mal ? Comment faire différent ?
Sans réellement amener de réponse claire, elle a fait prendre un peu de recul sur le design à l'assemblée. Je vous conseille vraiment de voir le replay quand il sortira de cette conférence. Engagez des UX et des designers, osez faire différent et démarquez-vous !

Cette conférence a permis de renforcer mon envie de m'investir d'avantage dans l'agence numérique [AYA](www.aya-experience.com) qui est en train d'être montée au sein de Zenika, pour des designs plus assumé !

## Vendredi

### L'accessibilité décomplexée - ce qu'elle peut faire pour vous

[Nicolas Hoffmann](https://twitter.com/nico3333fr?lang=fr), auteur de [plugins JQuery](https://a11y.nicolas-hoffmann.net/), nous a expliqué pourquoi nous devions faire de l’accessibilité et rendre nos sites accessibles. Même si l'auditoire de Paris Web est à mon sens déjà acquis à la cause, je pense que [la piqûre de rappel](https://www.nicolas-hoffmann.net/paris-web-2016-accessibilite-decomplexee/#/) n'a pas fait de mal.

### Ne passons pas à côté des choses simples

J'ai déjà eu l'occasion d’expérimenter des technologies comme **metalsmith** ou **jekyll**, des générateurs de sites statiques. Leur principe est de faire des sites web avec un peu d'HTML, de CSS et de JS. L'édition de contenu se fait alors directement sur Git. C'est très bien, car je suis un développeur et je sais écrire du Markdown, du HTML, du CSS et du JS. Les processus de Github sont en plus parfaitement adaptés : je fais des pull requests avant de publier une nouvelle page en la faisant relire par quelqu’un d'autre. En plus, c'est économique : je peux héberger ce genre de sites sur une Github Page !

Oui, mais ma mère - ou toute autre personne non technique - ne pourrait pas éditer une page sur mon site statique, elle serait perdue. C'est là que [la présentation](http://frank.taillandier.me/presentations/ne-passons-pas-a-cote-des-choses-simples/) de [Frank Taillandier](http://frank.taillandier.me/) et de [Bertrand keller](http://bertrandkeller.info/) m'a permis d'ouvrir ma vision des possibilités offertes par les sites statique à l'infini. En effet, de nouveaux CMS qui se basent sur les API de Github - voire d'un autre VCS - émergent. Cette nouvelle manière de concevoir des sites web économique s'appelle la JAMStack (Javascript APIs Markup - JAM). 

Se basant sur les processus d'édition de documents éprouvés de Git et sur les API de services comme Github, ces CMS n'ont même pas besoin de base de données. Tout est statique de bout en bout (certes, sauf les API du VCS) et c'est beaucoup plus simple, non ? **K.I.S.S** !

### Une graphiste parmi les devs

[Florie Séchaud](https://twitter.com/floriesd) a fait un retour sur sa propre expérience. Elle porte la double casquette de développeuse et de graphiste. Engagée initialement comme développeuse, ses talents de graphiste ont ainsi permis d’améliorer le produit. Le côté intéressant de sa conférence est la manière dont elle s'est fait accepter comme graphiste dans l'équipe. Pour moi, une équipe qui fait du développement web doit (dans 80% des cas - les back-office n'ont pas forcément besoin d'être jolis, même si...) comporter un UX / designer au même titre que des développeurs !

### HTML5.1 + web Platform APIs

Pour vous dépeindre cette conférence, je vous demande de faire appel à votre mémoire et à votre imagination. Imaginez une documentation W3C de 300 pages ; si vous ne voyez pas imaginez une spécification d'engin militaire révolutionnaire datant des années 1950. Ça sent la poussière, ça ne donne pas envie de lire, mais pourtant le contenu est souvent intéressant. La présentation de Charles McCathieNevile et Léonie Watson - tous deux membres du W3C - suivait le même principe. Aucune mise en forme des slides - s'ils l’avaient fait sur un notepad, ça ne m'aurais pas choqué, une démonstration sur dix qui marche et pourtant le contenu était vraiment bien !

Ils ont d’abord fait une revue des nouvelles API disponibles qui étendent les possibilités des applications web. Au programme, une api de vibration, de gamepad, de paroles, etc. Bref, que du bon !

La deuxième partie portait plus sur les évolutions du HTML5, ce qu'ils ont abandonné et ce qu’ils vont améliorer. C'était assez intéressant de se mettre à la place du W3C et de comprendre d'où viennent ces choix de langages.

### Leboncoin, les coulisses d'une refonte graphique

[Jérémie Pereira](https://www.paris-web.fr/orateurs/jeremie-pereira.php) et [Margaux Chenard](https://twitter.com/margauxchenard) nous ont présenté la refonte graphique qu'ils ont menée sur un des sites les plus consultés des français. Leboncoin était un site à l'apparence très vieillotte et surtout absolument pas responsive ! Leur objectif était donc – outre l'amélioration graphique – d'avoir un réel gain de visiteurs sur mobile.

Pour mener à bien cette refonte, j'ai aimé bien des aspects : les tests utilisateurs en conditions réelles (beta publique), la livraison par lots en production (encore actuellement tout le site responsive n'est pas livré) et une première phase de veille - prendre un peu de recul avant de foncer est très important et ce, dans tous les domaines.

Mais ce que j'ai aimé et retenu dans leur approche, c'est qu’ils bénéficié d'une liberté totale de la part de leurs chefs et ce sont donc eux-mêmes qui ont mené de bout en bout cette refonte. Ils ont ainsi composé une équipe pluridisciplinaire pour essayer de rendre le site le plus responsive possible et motiver un maximum de gens dans le projet. La pression n'est pas venue du chef, mais des utilisateurs eux-mêmes et je pense que c'est ce qui manque à beaucoup de projets.


### Le mot de la fin

C'est donc avec grande joie que j'ai participé à l'édition 2016 de Paris Web ! Le mélange entre UX / design et développement m'a vraiment plu. J'ai vu certains écrire que l'événement était en perte de vitesse ; c'est ma première participation et c'est donc difficile de juger, mais une conférence de deux jours avec plusieurs tracks et des sujets intéressants, moi je vote pour ! Alors à l'année prochaine !
