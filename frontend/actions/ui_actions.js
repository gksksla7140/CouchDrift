export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = modal =>({
  type: OPEN_MODAL,
  modal,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

export const TOGGLE_DROP_DOWN = 'TOGGLE_DROP_DOWN';

export const toggleDropDown = () => ({
  type: TOGGLE_DROP_DOWN,
});
