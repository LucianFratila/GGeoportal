 const createToggleVisibility = (set) => ({

    //// global state for mainNav Visibility ////
    mainNavVisibility:true,
    toggleMainNav:() => set(state => ({ mainNavVisibility: !state.mainNavVisibility })),
    showMainNav:() => set(() => ({ mainNavVisibility: true })),
    hideMainNav:() => set(() => ({ mainNavVisibility: false })),

    //// global state for Concession Map Layer Visibility ////
    concessionLayerVisibility:true,
    concessionLayerData:null,
    showConcession:() => set(() => ({ concessionLayerVisibility: true })),
    hideConcession:() => set(() => ({ concessionLayerVisibility: false })),
    toggleConcessionLayer:() => set(state => ({ concessionLayerVisibility: !state.concessionLayerVisibility })),
    changeConcesionLayerData:(data) => set((state) => ({ concessionLayerData: data })),

    UFAvisibility:false,
    toggleUFA:() => set(state => ({ UFAvisibility: !state.UFAvisibility })),
    showUFA:() => set(() => ({ UFAvisibility: true })),
    hideUFA:() => set(() => ({ UFAvisibility: false })),

    UFGvisibility:false,
    toggleUFG:() => set(state => ({ UFGvisibility: !state.UFGvisibility })),
    showUFG:() => set(() => ({ UFGvisibility: true })),
    hideUFG:() => set(() => ({ UFGvisibility: false })),

    AACvisibility:false,
    toggleAAC:() => set(state => ({ AACvisibility: !state.AACvisibility })),
    showAAC:() => set(() => ({ AACvisibility: true })),
    hideAAC:() => set(() => ({ AACvisibility: false })),

    //// global state for Concession Map Layer Visibility ////

    ///// SidePanel Visibility /////
    sidePanel:false,
    showSidePanel:() => set(() => ({ sidePanel: true })),
    hideSidePanel:() => set(() => ({ sidePanel: false })),


    jwt:null,
    setJwt:(data) => set((state) => ({ jwt: data })),

})

export default createToggleVisibility