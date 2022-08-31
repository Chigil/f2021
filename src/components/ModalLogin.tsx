import React, { useContext } from 'react';
import Context from '../context/context';
import Login from './Login';

const ModalLogin = () => {
  const { openModal, setOpenModal } = useContext(Context);
  return (
    <div className={`modal fade ${openModal && 'show d-block'}`} tabIndex={1} onClick={(event) => setOpenModal(false)}>
      <div className='modal-dialog' onClick={(event) => event.stopPropagation()}>
        <div className='modal modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Login or registration</h5>
            <button type='button'
                    className='btn-close'
                    data-bs-dismiss='modal'
                    aria-label='Close'
                    onClick={() => setOpenModal(false)}>
            </button>
          </div>
          <div className='modal-body'>
            <Login/>
          </div>
        </div>
        <div className={`modal-backdrop fade ${openModal && 'show d-block'}`}></div>
      </div>
    </div>
  );
};

export default ModalLogin;