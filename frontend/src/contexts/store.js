import produce from 'immer';
import create from 'zustand';

const useStore = create((setStore) => ({
	scroll: null, // ? locomotive-scroll’s instance

	fullscreen: false, // ? mobile fullscreen menu

	setStore: (fn) => setStore(produce(fn)), 
}));

export default useStore;
