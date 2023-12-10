import React from 'react';
import { ReactComponent as IconClose } from '../../images/icons/Cross-opt.svg';
import {
  ModalCard,
  ModalImgWrap,
  ModalImg,
  ModalDescriptionWrap,
  Block,
  ModalTitleH3,
  Description,
  ModalTitleH4,
  ConditionsList,
  ConditionsItem,
  ModalCloseButton,
} from './Modal.styled';

const ModalComponent = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (       
          <ModalCard>
            <ModalImgWrap>
              <ModalImg className='ModalImg' src="" alt="" />
            </ModalImgWrap>
            <ModalDescriptionWrap>
              <Block>
                <ModalCloseButton onClick={() => onClose()}>
                  <IconClose />
                </ModalCloseButton>
                {children}
                <ModalTitleH3 />
                <Description />
                <ModalTitleH4 />
                <ConditionsList>
                  <ConditionsItem />
                </ConditionsList>
              </Block>
            </ModalDescriptionWrap>
          </ModalCard>        
      )}
    </>
  );
};

export default ModalComponent;