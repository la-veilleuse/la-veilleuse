---
title: Retour sur Paris Web 2016
author: <a href="https://twitter.com/JoGrenat">Jordane Grenat</a>
date: 2016-11-05
draft: true
---

Pour la seconde année consécutive, je me suis rendu à Paris Web, envoyé par Viseo – que je remercie chaleureusement. Comme son nom l'indique, il s'agit d'une conférence centrée autour de l'écosystème web qui s'est déroulée à Paris le 29 et le 30 septembre.

## Impressions générales

Paris Web se définit comme étant "*La conférence francophone des gens qui font le web*". Et pour moi, cette simple phrase résume l'essentiel : Paris Web se concentre sur l'humain – sur les personnes derrière le web – en le replaçant au coeur des problématiques rencontrées. Et c'est ce qui fait toute son originalité, car si les fonds techniques sont un peu partout les mêmes, rares sont les conférences qui abordent l'accessibilité, l'éthique et les valeurs morales comme des facettes à part entière de ces technologies.

Et les organisateurs montrent fortement l'exemple puisque toutes les conférences sont accessibles, grâce au choix des lieux, à la traduction en direct des conférences en LSF, à la vélotypie assurée dans une des deux salles ainsi qu'aux casques de traduction pour les conférences en anglais.

Ces valeurs se ressentent sur l'ambiance générale de la conférence qui est encore une fois très bonne – très *humaine*. L'année précédente, j'avais écrit avoir eu [l'impression d'être plongé dans un bain de mièvrerie et de bonheur tout rose](http://blog.viseo-bt.com/paris-web-2015-outils-openid/) (n'ayons pas peur des termes !). L'ambiance ressentie cette année était un peu différente, mais toujours centrée sur l'empathie et l'optimisme. Si je devais mettre résumer l'ambiance de cette année, je dirais que Paris Web m'a plus que jamais remis à ma place de *citoyen du web*, membre d'un écosystème dont je suis responsable autant qu'un autre. Ce que le slogan de cette année résume très bien : "*On a tous un rôle à jouer.*"

L'organisation était encore une fois excellente ; les horaires étaient respectés, les différentes *tracks* bien synchronisées, le buffet était mémorable et les temps de pause bien placés. Un petit regret cette année : point de village des sponsors, alors qu'il apportait un peu d'animation lors de l'édition précédente. Un choix surprenant mais sûrement justifié par des informations que je n'ai pas.

Au niveau des conférences en elle-même, j'ai beaucoup apprécié mes choix de la première journée ; je suis en revanche resté sur ma faim durant la seconde journée où les sujets ne m'ont pas vraiment touché. J'y reviendrai plus en détails à la fin de cet article. Plutôt que de vous dresser le programme de la conférence avec un commentaire plus ou moins inspiré sur chaque talk, je vais revenir dans cet article sur les quelques conférences qui m'ont particulièrement intéressé.


## La Blockchain, quand l'individu sert au collectif... malgré lui

La Blockchain est le nouveau sujet hype par excellence qu'on nous ressort à toutes les sauces. Je connaissais les concepts de base sans vraiment comprendre la technique derrière où les enjeux de la technologie. [François Zaninotto](http://www.redotheweb.com/) offre dans cette conférence une exploration plutôt complète de tous ces points.

Pour comprendre l'origine de la Blockchain, il faut s'intéresser à la façon dont la plupart des transactions de tous types sont effectuées. La plupart du temps, une opération fait intervenir un ou plusieurs tiers de confiance (certification, authentification, paiement, etc.) Une dépendance est donc présente envers ces tiers de confiance, qui peuvent ainsi contrôler les opérations effectuées et qui parfois ne sont pas totalement fiables !

C'est de ce constat que commence une thèse publiée en 2008 sous le pseudonyme Satoshi Nakamoto qui jette les bases de la première Blockchain à l'origine de la monnaie virtuelle Bitcoin. La solution est simple et élégante : toutes les opérations sont stockées sous la forme d'une liste de chaînée de blocs formant ce qu'on appelle un registre. Le registre est ensuite partagé et synchronisé entre une multitude de clients. Chacun des clients est capable de vérifier la validité de la chaîne, ce qui assure qu'aucune altération ne peut être effectuée sans être immédiatement détectée.

Des problèmes techniques se posent. Il faut être capable d'ordonner les nouveaux blocs correctement. En effet, que se passe-t-il si quelqu'un effectue deux fois la même opération au même instant ? Imaginons qu'un individu possède 20€ sur un compte, et effectue au même moment deux ordres de virement de 20€ sur deux comptes différents. Quel virement doit être pris en compte ?

Cette problématique est résolue par l'apparition des notions de preuve de travail (*proof of work*) et de score. Pour ajouter un bloc à cette chaîne, on doit en effet calculer un hash basé sur le bloc à ajouter, sur le précédent bloc et sur un facteur aléatoire. Le hash ainsi généré doit remplir un certain critère (par exemple commencer par *x* zéros) pour pouvoir être ajouté à la chaîne. Si le hash calculé ne répond pas à ce critère, il faut alors changer le facteur aléatoire et recalculer des hashs jusqu'à obtenir un hash valide nous permettant d'ajouter le bloc à la chaîne. Cela ne suffit pas, car bien que cette preuve de travail soit difficile à réaliser, il peut arriver que deux versions de la blockchain intègrent des blocs différents. C'est pourquoi on peut calculer pour chaque chaîne un score permettant de départager les différentes versions.

Au-delà de cet aspect technique, on se rend compte que des problématiques totalement différentes se posent. Ainsi, comme la blockchain supprime totalement les intermédiaires et qu'elle est par nature totalement décentralisée, un business plan reste à trouver pour rentabiliser la technologie.
