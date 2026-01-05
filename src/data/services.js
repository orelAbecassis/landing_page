import { Monitor, Smartphone, Share2, Layout, ClipboardList, Sparkles, Cpu, QrCode, MessageCircle, Target } from 'lucide-vue-next'

export const services = [
    {
        id: 'site-vitrine',
        title: 'Site Vitrine',
        subtitle: 'PRÉSENCE EN LIGNE',
        quote: 'Une présentation professionnelle en un seul lien',
        description: 'Création de sites web à la fois élégants et performants, conçus pour renforcer votre image et transformer vos visiteurs en clients.',
        fullDescription: 'Bien plus qu’une présence en ligne : un site vitrine performant qui valorise votre activité en continu.',
        hero: {
            subtitle: 'Développement Web & Solutions Digitales',
            title: 'Donnez un nouvel élan à votre activité.',
            description: 'De la simple présence en ligne aux applications web complexes. Je conçois des outils numériques performants, esthétiques et taillés pour votre croissance.',
            colorStartIndex: 4
        },
        icon: Monitor,
        features: ['Design sur-mesure', 'Responsive & Rapide'],
        detailedFeatures: [
            'Design UX/UI personnalisé',
            'Développement responsive',
            'Chargement rapide',
            'Formulaire de contact',
            'Hébergement',
            'Maintenance (1 mois)'
        ],
        surMesure: {
            title: 'Solution Sur Mesure',
            description: 'Vous avez un besoin spécifique qui ne rentre dans aucune case ? C\'est là que je m\'amuse le plus.',
            details: 'Il permet de présenter clairement votre activité, vos services et votre identité, tout en offrant à vos visiteurs une expérience fluide et accessible à tout moment. Un site bien conçu inspire confiance et valorise votre image professionnelle.',
            icon: Sparkles
        }
    },
    {
        id: 'app-web',
        title: 'App Web',
        subtitle: 'SUR MESURE',
        quote: 'Une solution de pilotage adaptée à votre organisation',
        description: 'Développement d\'applications web complexes et sur-mesure pour répondre à vos besoins métiers spécifiques.',
        fullDescription: 'Transformez vos idées en outils puissants. Je développe des applications web robustes, évolutives et sécurisées, parfaitement adaptées à vos processus métiers.',
        hero: {
            subtitle: 'Applications Web & SAAS',
            title: 'Transformez vos idées en outils puissants.',
            description: 'Des solutions logicielles sur mesure, accessibles partout, pour optimiser vos processus et booster votre productivité.',
            colorStartIndex: 3
        },
        icon: Layout,
        features: ['Fonctionnalités avancées', 'Interface intuitive'],
        detailedFeatures: [
            'Analyse des besoins',
            'Architecture sur-mesure',
            'Développement Full Stack',
            'Tests et déploiement',
            'Maintenance évolutive'
        ],
        surMesure: {
            title: 'Pourquoi une App Web ?',
            description: 'Plus qu\'un site, un véritable logiciel accessible via navigateur.',
            details: 'Gestion de clients, tableaux de bord, automatisation de processus... Une application web est conçue pour être l\'épine dorsale de votre activité digitale, disponible 24/7 sur tous les supports.',
            icon: Cpu
        }
    },
    {
        id: 'cartes-digitales',
        title: 'Carte Digitale',
        subtitle: 'INNOVATION',
        quote: 'Bien plus qu\'une simple carte',
        description: 'Création de cartes de visite ou d’invitations digitales pour une communication moderne et élégante.',
        fullDescription: 'Offrez une expérience unique avec des cartes digitales pour vos événements : mariages, anniversaires, invitations professionnelles ou privées. Interactives et personnalisées, elles permettent de partager toutes les informations essentielles (date, lieu, programme, contact) de manière simple et intuitive.',
        hero: {
            subtitle: 'Cartes de Visite & Invitations',
            title: 'Une carte unique pour tous vos moments.',
            description: 'Professionnels ou particuliers : carte de visite, invitation de mariage, faire-part... Une solution digitale élégante, écologique et instantanée.',
            colorStartIndex: 2
        },
        icon: Smartphone,
        features: [
            'Cartes interactives',
            'Design personnalisé'
        ],
        detailedFeatures: [
            'Design sur mesure selon votre événement',
            'Accès via lien ou QR Code',
            'Informations modifiables à tout moment',
            'Compatible mobile, tablette et ordinateur',
            'Solution écologique et économique'
        ],
        surMesure: {
            title: 'Une infinité de possibilités',
            description: 'Adaptez votre communication à chaque occasion.',
            details: 'Que ce soit pour networker efficacement ou pour inviter vos proches à un événement, la carte digitale s\'adapte à vos besoins. Partage illimité, design sur-mesure et effet "wow" garanti.',
            icon: QrCode
        }
    },
    {
        id: 'reseaux-sociaux',
        title: 'Réseaux Sociaux',
        subtitle: 'VISIBILITÉ',
        quote: 'Transformez votre audience en clients',
        description: 'Gestion stratégique de votre présence en ligne pour accroître votre visibilité et votre engagement.',
        fullDescription: 'Ne laissez pas vos réseaux sociaux au hasard. En tant que Community Manager, je vous aide à construire une communauté engagée et fidèle autour de votre marque.',
        hero: {
            subtitle: 'Social Media Management',
            title: 'Faites rayonner votre marque sur le web.',
            description: 'Une stratégie social media performante pour accroître votre visibilité, engager votre communauté et booster votre business.',
            colorStartIndex: 4
        },
        icon: Share2,
        features: ['Stratégie de contenu', 'Community Management', 'Analyse de performance'],
        detailedFeatures: [
            'Audit de votre présence actuelle',
            'Définition de la stratégie éditoriale',
            'Création de visuels et rédaction de posts',
            'Planification et publication',
            'Modération et réponse aux commentaires',
            'Rapport mensuel de performances'
        ],
        surMesure: {
            title: 'Plus que des likes',
            description: 'Une véritable stratégie de communication.',
            details: 'Création de contenu, planning éditorial, modération, analyse... Je gère votre présence en ligne de A à Z pour vous permettre de vous concentrer sur votre cœur de métier.',
            icon: MessageCircle
        }
    },
    {
        id: 'gestion-projet',
        title: 'Gestion de Projet',
        subtitle: 'ORGANISATION',
        quote: 'La réussite de vos projets, sans stress',
        description: 'Pilotage complet de vos projets digitaux pour garantir respect des délais, budget et qualité.',
        fullDescription: 'En tant que Chef de Projet, je prends en main le pilotage de vos projets web et mobiles. De la conception à la mise en ligne, je coordonne les équipes, gère le planning et m\'assure que le produit final correspond parfaitement à vos attentes.',
        hero: {
            subtitle: 'Pilotage & Coordination',
            title: 'Transformez vos ambitions en succès.',
            description: 'Un pilotage rigoureux de vos projets digitaux. Je coordonne les équipes et garantis le respect des délais et de la qualité.',
            colorStartIndex: 3
        },
        icon: ClipboardList,
        features: ['Planification', 'Coordination', 'Suivi qualité'],
        detailedFeatures: [
            'Cahier des charges',
            'Méthodologie Agile/Scrum',
            'Gestion des risques',
            'Suivi budgétaire',
            'Recette et tests'
        ],
        surMesure: {
            title: 'Un chef d\'orchestre dédié',
            description: 'De la conception à la mise en ligne.',
            details: 'Cahier des charges, méthodologie Agile, suivi budgétaire... Je suis le garant de la bonne exécution de votre projet, en faisant le lien entre vos besoins et la technique.',
            icon: Target
        }
    }
]
