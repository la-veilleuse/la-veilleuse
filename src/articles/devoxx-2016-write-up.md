---
title: Retour sur Devoxx France 2016
author: Jordane Grenat
date: 2016-04-25
---

Du 20 au 22 avril s'est déroulée la conférence Devoxx France à laquelle nous avons pu assister. Réunissant pour cette cinquième édition plus de 2700 participants au palais des congrès, Devoxx est le rendez-vous incontournable pour la communauté des développeurs française.

J'y présentais le mercredi un live-coding sur la gestion de l'asynchrone en JavaScript avec les nouveaux outils apportés par ES 2015 et – surprise du jeudi soir – j'ai également présenté un quickie le vendredi midi sur les alternatives à webpack. Je reviendrai là-dessus dans cet article ainsi que sur mon expérience plus générale de Devoxx.

<!-- more -->

## L'avant-Devoxx

Après les délibérations du *Call for Paper*, j'ai ainsi appris qu'un de mes sujets avait été retenu sur la programmation asynchrone en JavaScript depuis ES 2015. J'ai également appris qu'un sujet sur webpack était retenu en back-up, au cas où il y aurait des désistements.

En parallèle, nous avons décidé avec un collègue de créer sous la forme d'une application web un jeu pour animer l'un des stands sponsors de Devoxx et nous avons donc eu une très forte charge de travail sur notre temps libre – même après qu'un troisième collègue nous ait rejoint.

Entre préparation de mes conférences et du jeu et d'un BBL, la période pré-Devoxx a été très intense et est passée très rapidement. J'ai reçu peu d'informations de la part de l'organisation, mais je me suis rendu compte au final qu'il y avait en fait toutes les informations dont j'ai pu avoir besoin.

Les conférences sont divisées entre plusieurs salles et on ne peut donc pas assister à tout. De façon ingénieuse, on peut renseigner sur le site du CFP la *wish-list* des conférences que l'on souhaite voir, ce qui permet à l'organisation de gérer la taille des salles et les horaires. La richesse du contenu nous donnerait pourtant bien envie de tout voir !

## Une première journée très riche

Je suis arrivé le premier jour de bonne heure et me suis retrouvé sur le stand [Viseo](http://www.viseo.com/fr) pour aider à l'installation. Rapidement les premières conférences arrivent, et nous choisissons avec un collègue d'aller à un hands-on sur la programmation réactive avec [Reactor](http://projectreactor.io/) animé par [Sebastien Deleuze](https://twitter.com/@sdeleuze) et [Stéphane Maldini](http://cfp.devoxx.fr/2016/speaker/stephane_maldini). La présentation était à la fois très claire et très intéressante et la partie pratique aidait vraiment à découvrir l'API de Reactor. C'est d'ailleurs le seul reproche que je ferais à cet excellent atelier : on est beaucoup trop centré sur l'API et il aurait été bon de prendre un peu de recul ensuite avec des exercices plus orientés métier. Comme l'ont précisé les deux intervenants, il s'agit d'un atelier en constante évolution, et je ne doute pas que cela finira par venir !

J'ai ensuite assisté à une université sur Spring Boot en partant du principe suivant : à chaque fois que je pense en savoir long sur ce projet, je découvre de nouvelles possibilités qui me prouvent le contraire. Et ce talk n'a pas fait exception à la règle ! [Brian Clozel](http://cfp.devoxx.fr/2016/speaker/brian_clozel) et [Stéphane Nicoll](http://cfp.devoxx.fr/2016/speaker/stephane_nicoll) se sont donné la réplique pendant trois heures qui sont passées étonnement vite. Partant d'une application basique permettant la gestion des clés de configuration dans Spring, les deux speakers l'ont progressivement enrichie de nouvelles fonctionnalités. Parmi les découvertes de cette présentation :  la gestion des exceptions pour les contrôleurs via les annotations `@ControllerAdvice` et `@ExceptionHandler`, les devtools, les propriétés pour gérer la compression des requêtes, la gestion du cache HTTP avec les Etags, et encore beaucoup d'autres qu'il serait trop long de lister ! Une seule envie en reprenant le travail : rétro-appliquer tout ça sur nos projets !

Pour conclure la journée de conférences, j'ai assisté à "Boucle de feedback pour le développeur" par [Christophe Jollivet](http://www.twitter.com/@jollivetc) et [Mickael Debonnaire](http://www.twitter.com/@mdebonnaire). L'idée générale de la présentation est d'améliorer la rapidité du feedback lorsqu'on développe afin de pouvoir tester très rapidement l'effet de notre code et de repérer les erreurs le plus en amont possible. Ils abordent notamment le reload automatique, que ce soit au niveau de l'application web ou de notre code Java via les devtools de Spring. Mais il peut également s'agir d'un feedback via les tests en les exécutant dès qu'un changement est effectué afin d'avoir un retour immédiat dans notre IDE grâce à [Infinitest](https://infinitest.github.io/). De même, grâce aux outils développeur de Chrome, on peut lier nos workspaces à des emplacements physique sur notre disque dur et effectuer des modifications en direct. Enfin, on peut tester plus facilement plusieurs devices en synchronisant nos actions grâce à des outils comme [Browsersync](https://www.browsersync.io/).

## Interlude #1 – Du déroulement de mon premier talk et du repas des speakers

Le premier jour était un peu spécial puisqu'il s'agissait du jour de mon premier talk. Premier pour cet évènement, mais premier également en conférence tout court, n'ayant jusqu'à présent pris la parole que sur des formats BBL ou Meetup.

C'est donc un peu stressé que j'ai pris la parole, ayant également royalement raté un entraînement la veille ! La loi de Murphy m'ayant heureusement épargné, tout s'est déroulé bien mieux qu'aux répétitions. L'équipe technique m'a mis en confiance et les deux petites erreurs que j'ai pu faire pendant mon live-coding ont été remarquées immédiatement par un public qui était du coup attentif et réactif. Une très bonne expérience ! J'ai ensuite discuté brièvement avec le speaker qui intervenait après moi.

Le soir était organisé un grand buffet avec tous les speakers ayant répondu à l'appel. Après avoir discuté avec quelques invités, j'ai retrouvé le speaker de la fin de ma conférence, le très sympathique [Philippe Antoine](https://github.com/philippeantoine) – qui m'a du coup présenté à beaucoup de membres de cette communauté Devoxx, ce dont je le remercie chaleureusement ! Ce fut donc une très bonne soirée à échanger sur de nombreux domaines, chacun ayant évidemment sa spécialité !

## Place à la seconde journée

Une présentation assez remarquable à laquelle j'ai pu assister le second jour est celle de [Jean-Laurent de Morlhon](http://www.twitter.com/@morlhon) intitulée "Pourquoi Maurice ne doit surtout pas coder en Go". Il s'agit pour le coup d'une introduction au Go mettant en évidence tous ses défauts, mais de façon assez surprenante également ses qualités. Paradoxalement, bien qu'il m'ait fermement convaincu de ne pas m'y mettre, sa présentation était très intéressante !

J'ai ensuite assisté au quickie de [Jérémie Martinez](http://www.twitter.com/@JeremMartinez) – que j'avais pu rencontrer lors du repas des speakers. Celui-ci nous a présenté [Truth](https://github.com/google/truth), un framework d'assertion réalisé par Google et qui a pour vocation principale de rendre les tests et les erreurs plus lisibles que ce qu'on peut obtenir avec AssertJ notamment. Le pari semble tenu et le framework me semble assez intéressant pour lui donner sa chance ! Deux notions me plaisent particulièrement dans ce framework : l'implémentation de tests métier me rappelant étrangement les page objects et les différentes stratégies d'échec.

J'ai également assisté à la conférence "Progressive Web Apps" par [Cyril Balit](http://www.twitter.com/@cbalit) et [Florian Orpelière](http://www.twitter.com/@florpeliere). Bien qu'il s'agissait d'un sujet que je connais déjà bien, la présentation était très complète. Après un bref rappel sur l'évolution des applications mobiles, ils nous proposent de combler ensemble le gouffre entre applications natives et applications web. Cela passe par la création d'application offline-first grâce aux service workers et par leur biais à une fine gestion du cache, mais également par l'optimisation des temps de chargement, l'ajout d'une icône de lancement sur le mobile et le réengagement de l'utilisateur obtenu grâce aux push notifications. Une bonne présentation, peut-être monotone à un ou deux moments mais qui couvre complètement le sujet.

## Interlude #2 : De ce que j'aurais aimé ne pas manquer

Avec un tel nombre de tracks en parallèle, le plus dur est souvent de sacrifier certains sujets en faveur d'autres. Heureusement, les vidéos seront là pour rattraper ces manquements ! Voici un bref récapitulatif des sessions que j'aurai plaisir à découvrir sur internet :

 - "[Property-Based Testing, enfin pour tout le monde](http://cfp.devoxx.fr/2016/talk/NJW-9734/Property-Based_Testing,_enfin_pour_tout_le_monde)" : sujet sur lequel mes connaissances avoisinent le néant, j'entends cependant de plus en plus parler du *property-based testing* et cette vidéo sera sûrement une bonne façon de prendre le train en marche ;
 - "[SSE : le Streaming Simple et Efficace, sans WebSocket](http://cfp.devoxx.fr/2016/talk/AGY-6299/SSE_:_le_Streaming_Simple_et_Efficace,_sans_WebSocket)" : ayant découvert SSE il y a quelques mois, je n'ai cependant jamais eu l'occasion de l'utiliser en Java ; cette présentation d'[Alexandre Victoor](http://www.twitter.com/@Alex_Victoor) me permettra d'en apprendre plus sur son implémentation ;
 - "[Ce que les stratégies de versioning nous disent des dynamiques d’équipe](http://cfp.devoxx.fr/2016/talk/BFE-4198/Ce_que_les_strategies_de_versioning_nous_disent_des_dynamiques_d%E2%80%99equipe)" : Grand adepte de Git et toujours curieux de découvrir de nouveaux modèles de gestion des branches, je jetterai un coup d'oeil à cette conférence sur laquelle je n'ai malheureusement pas réussi à obtenir de retours ;
 - "[Entrer dans les entrailles de Git, ou comment faire un commit sans faire du Git](http://cfp.devoxx.fr/2016/talk/YJX-2462/Entrer_dans_les_entrailles_de_Git,_ou_comment_faire_un_commit_sans_faire_du_Git)" : Toujours sur Git mais un sujet complètement différent, j'ai eu de très bons retours sur cette conférence à laquelle j'aurais vraiment aimé assister ;
 - Un sujet sur Blockchain : Cette technologie de stockage d'informations décentralisée et immuable commence à faire beaucoup parler d'elle, la preuve puisqu'au moins trois conférences concernaient directement ce sujet ;
 - "[L'expérience Developpeur et votre API](http://cfp.devoxx.fr/2016/talk/ZYB-4570/L'Experience_Developpeur_et_votre_API)" : Trop souvent négligée, l'expérience développeur est un concept qui me tient à coeur, de même que les APIs. Un sujet combinant les deux ne pourra donc que me plaire ;
 - "[Quoi d'neuf Docker - live : Docker sur ARM](http://cfp.devoxx.fr/2016/talk/CMA-1989/Quoi_d'neuf_Docker_-_live_:_Docker_sur_ARM)" : Cette conférence est un peu particulière puisque ce qui motive mon choix, c'est la destruction en live d'un Raspberry à coups de meuleuse !

Sans surprise donc, pour moi Devoxx reprendra dès la publication des vidéos en ligne !

## Vous reprendrez bien une troisième journée ?

Une journée qui commence sous le signe de la fatigue pour ma part, ayant passé la soirée à peaufiner ma présentation du jour. Et c'est dans cet état d'esprit que j'ai suivi la conférence "Real Real World Haskell" par [Arnaud Bailly](https://twitter.com/@abailly). Si cela pourrait être une excuse pour les difficultés que j'ai eues à suivre, la vérité est toute autre : la syntaxe Haskell est dure à appréhender et pour un premier contact, j'étais définitivement trop novice en Haskell pour comprendre pleinement les exemples. Cela ne m'a cependant pas empêché d'apprécier vraiment cette conférence grâce aux explications du speaker, ce qui me permettra par la suite de réétudier les slides à tête reposée. Haskell est définitivement un langage sur lequel je compte me pencher plus en détails !

Après cette conférence, j'ai présenté mon second talk, un quickie à propos des "amis trop peu connus de webpack", JSPM et Rollup. Ayant été prévenu au dernier moment suite à un désistement, j'ai effectué les dernières retouches la veille en urgence. J'étais cependant satisfait du résultat final et j'espère que le public aura apprécié également. Mon petit plaisir de fin de talk : diffuser [la musique d'inspecteur gadget](https://www.youtube.com/watch?v=IOOPsMNiiIM) dans le palais des congrès !

Je vais maintenant regrouper trois conférences sur le SQL auxquelles j'ai pu assister, la première le mercredi et les deux autres ce troisième jour. Ayant toujours adoré ce langage, j'ai malheureusement pas mal de retard sur les dernières fonctionnalités. Et comme je m'y attendais, j'ai pris des claques rafraîchissantes (j'expliquerai sans doute un jour cet étrange concept...) devant ces présentations. La première – animée par [Yan Bonnel](http://cfp.devoxx.fr/2016/speaker/yan_bonnel) – présente les capacités de PostgreSQL en matière de JSON. Ayant récemment beaucoup souffert de traitement de JSON stockés dans une base Oracle, je me suis senti comme un enfant devant un cadeau qu'il n'a pas le droit d'ouvrir...

Les deux dernières ont été présentées par [Lukas Eder](https://twitter.com/@lukaseder), une vraie révélation durant cette conférence. Drôle et très intéressant, il nous a parlé dans sa première intervention de "[Ten SQL Tricks that You Didn’t Think Were Possible](http://de.slideshare.net/LukasEder1/10-sql-tricks-that-you-didnt-think-were-possible)". Alternant entre astuces théoriques et résolution de cas pratiques, la lecture de ses slides m'a donné quelques migraines et une forte volonté de combler mes lacunes sur ce langage.

Cette présentation m'a particulièrement donné envie d'assister à la suivante, "Get Back in Control of Your SQL with [jOOQ](http://www.jooq.org/)" qui nous présente une façon de reprendre le contrôle de son SQL en Java. Le but est de modéliser en Java un DSL du langage SQL qui connait nos tables grâce à de la génération de code. On peut ainsi faire du code SQL qui ne compilera que s'il est correct. Cette solution est très intéressante et je pense qu'elle peut tout à faire être utilisée en parallèle d'Hibernate, même si tout semble les opposer a priori. Un bon compromis serait de conserver Hibernate pour la plupart des traitements et d'utiliser jOOQ uniquement pour des requêtes complexes.


## Interlude #3 : De l'ambiance de Devoxx

L'ambiance d'une conférence est souvent ce qui donne envie ou non d'y revenir. En terme de participants, Devoxx est la plus important à laquelle il m'a été donné d'assister, et j'étais donc assez curieux de ce que cela pouvait donner.

Et mon premier contact a été avec le village des sponsors. Et j'avoue avoir été un peu déçu par les plupart des stands. Le fait que les places soient chères pour les entreprises restreint un peu l'horizon aux boîtes les plus connues, ce qui en limite du même coup l'intérêt à mes yeux ; ce que j'aime surtout dans ce genre d'évènements, c'est de découvrir de nouveaux acteurs dans le métier. Bien sûr cela ne concernait qu'une majorité, puisque j'ai quand même pu découvrir quelques nouvelles boîtes et startups et avoir quelques discussions très intéressantes. Point plus anecdotique (et qu'aucun participant n'avouera jamais prendre en considération, évidemment !) : vu le nombre de présents, les goodies sont forcément plus simples qu'ailleurs et on retrouve donc essentiellement les désuets stylos, bonbons, balles en mousse et stickers.

Je m'attendais également à un peu plus d'animations dans ce village des sponsors, même si certaines boîtes étaient présentes au rendez-vous. Je citerai – avec un parti-pris évident ! – le stand de [Viseo](http://www.viseo.com/fr) avec le quiz multijoueurs et le vélo à smoothies, mais également le stand [JFrog](https://www.jfrog.com/) et ses tirages au sort, le stand [Zenika](http://www.zenika.com/) avec ses nombreux jeux, ou même l'excellente idée de [Choose Your Boss](https://www.chooseyourboss.com) pour se défouler à coup de nerf guns sur ses patrons !

Concernant l'ambiance générale de Devoxx, le début est un peu déroutant avec autant de monde, mais après le premier soir j'ai pu retrouver le lendemain des visages connus et me sentir davantage intégré à cette communauté nouvelle pour moi.

Concernant l'organisation, j'ai été agréablement surpris. Les horaires sont tenus, aucun problème de son, affichage ou Wifi n'est à déplorer (incroyable, pour une conférence !), les organisateurs sont très disponibles et toujours de bonne humeur malgré le stress qu'ils doivent subir. Le seul point négatif a été le problème des repas le premier midi, mais cela reste mineur quand on songe au bon déroulement du reste. Petite suggestion d'amélioration sur ce point : un fruit ou dessert quelconque serait très appréciable pour conclure ces déjeuners.

Une ambiance au final très bonne avec quelques petits points qui me laissent parfois sur ma faim – *no pun intended*... Un grand bravo aux organisateurs !


## L'heure du bilan

Cette conférence Devoxx France 2016 a donc été une expérience très intéressante durant laquelle j'ai pu faire mes premiers pas en tant qu'orateur, mais également apprendre énormément. Signe d'une bonne conférence, j'en suis reparti avec l'envie de mettre en pratique tout ce que j'ai pu découvrir et échanger davantage avec les intervenants. J'ai également rencontré des personnes passionnées – et donc passionnantes – que j'aurai grand plaisir à retrouver sur de futurs évènements !
