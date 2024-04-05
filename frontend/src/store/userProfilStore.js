import {create} from 'zustand'

export const userProfileStore = create(
    (set) => ({
        user: {
            nom: '',
            prenom: '',
            email: '',
            telephone: '',
            description: '',
            domaine: '',
            sous_domaine: '',
            profession: '',
            entreprise: '',
            competences: [],
        },
        setNom: (nom) => set((state) => ({user: {...state.user, nom: nom}})),
        setPrenom: (prenom) => set((state) => ({user: {...state.user, prenom: prenom}})),
        setEmail: (email) => set((state) => ({user: {...state.user, email: email}})),
        setTelephone: (telephone) => set((state) => ({user: {...state.user, telephone: telephone}})),
        setDescription: (description) => set((state) => ({user: {...state.user, description: description}})),
        setDomaine: (domaine) => set((state) => ({user: {...state.user, domaine: domaine}})),
        setSousDomaine: (sous_domaine) => set((state) => ({user: {...state.user, sous_domaine: sous_domaine}})),
        setProfession: (profession) => set((state) => ({user: {...state.user, profession: profession}})),
        setEntreprise: (entreprise) => set((state) => ({user: {...state.user, entreprise: entreprise}})),
        setCompetences: (competences) => set((state) => ({
            user: {
                ...state.user,
                competences: competences
            }
        })),
    }),
)
