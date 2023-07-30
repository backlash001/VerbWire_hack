/* eslint-disable no-unused-vars */
import { create, createStore } from "zustand";
import { appSlice } from "./appSlice";
import { adminSlice } from "./adminSice";
import { doctorSlice } from "./doctorSlice";
import { patientSlice } from "./patientSlice";


const store = (set) => ({
    ...appSlice(set),
    ...adminSlice(set),
    ...doctorSlice(set),
    ...patientSlice(set),
});


const useStore = create(store)


export default useStore;