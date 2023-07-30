/* eslint-disable no-unused-vars */
export const appSlice = (set) => ({
    user: null,
    contractaddress: '0x884A11c837D4134DfF46b8eB911596EB0663b009', // original deployed
    // contractaddress : '0x3870aCe44e42bbdeD923Ea727805dFeAC622426F',  //mydeployed
    // contractaddress : "0xdFcEc768b9BFd3e06D7510FFfB129F28b6543523" , //verbwire deployed
    // contractaddress: '0xaDDe79837E3b26c391670dE5bE9b433Cb0Ab6215',
    setUser: (user) => set(() => ({ user })),
});
