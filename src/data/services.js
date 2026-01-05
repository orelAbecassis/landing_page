import { Monitor, Smartphone, Share2 } from 'lucide-vue-next'

export const services = [
    {
        id: 'site-vitrine',
        title: 'Sites Vitrines',
        description: 'Conception de sites web modernes et performants qui reflètent votre identité et convertissent vos visiteurs.',
        fullDescription: 'Un site vitrine est bien plus qu\'une simple présence en ligne. C\'est votre commercial digital disponible 24h/24 et 7j/7. Je conçois des sites web sur-mesure, alliant esthétique soignée et performances techniques de pointe. Chaque projet est optimisé pour le référencement naturel (SEO) afin de vous garantir une visibilité maximale sur les moteurs de recherche.',
        icon: Monitor,
        features: ['Design sur-mesure', 'Responsive & Rapide', 'SEO Optimisé'],
        detailedFeatures: [
            'Design UX/UI personnalisé',
            'Développement responsive (Mobile First)',
            'Optimisation des performances (Core Web Vitals)',
            'Intégration SEO technique',
            'Formulaire de contact sécurisé',
            'Hébergement et maintenance inclus (1 an)'
        ]
    },
    {
        id: 'cartes-digitales',
        title: 'Cartes Digitales',
        description: 'Des cartes de visite et d\'événements interactives pour une communication innovante et écologique.',
        fullDescription: 'Révolutionnez votre façon de réseauter avec nos cartes de visite digitales NFC. Fini les cartes papier qui finissent à la poubelle. Avec une seule carte, partagez instantanément vos coordonnées, vos réseaux sociaux, votre portfolio et bien plus encore, simplement en l\'approchant d\'un smartphone. Une solution moderne, écologique et économique.',
        icon: Smartphone,
        features: ['Partage sans contact', 'Mise à jour instantanée', 'Design Premium'],
        detailedFeatures: [
            'Technologie NFC sans contact',
            'QR Code de secours intégré',
            'Interface profil personnalisable',
            'Mise à jour des données en temps réel',
            'Statistiques de vues',
            'Aucune application requise pour le destinataire'
        ]
    },
    {
        id: 'reseaux-sociaux',
        title: 'Réseaux Sociaux',
        description: 'Gestion stratégique de votre présence en ligne pour accroître votre visibilité et votre engagement.',
        fullDescription: 'Ne laissez pas vos réseaux sociaux au hasard. En tant que Community Manager, je vous aide à construire une communauté engagée et fidèle autour de votre marque. De la définition de la ligne éditoriale à la création de contenus visuels percutants, en passant par l\'interaction avec vos abonnés, je gère votre image pour que vous puissiez vous concentrer sur votre cœur de métier.',
        icon: Share2,
        features: ['Stratégie de contenu', 'Community Management', 'Analyse de performance'],
        detailedFeatures: [
            'Audit de votre présence actuelle',
            'Définition de la stratégie éditoriale',
            'Création de visuels et rédaction de posts',
            'Planification et publication',
            'Modération et réponse aux commentaires',
            'Rapport mensuel de performances'
        ]
    }
]
