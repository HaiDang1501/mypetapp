import "../../sass/core/anounceComp.scss";
import catOk from "../../assets/main/catok.jpg";
import { Modal } from "antd";
import cancel from "../../assets/main/cancel.png";
import { useState, } from "react";

const AnounceComp = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(true)
  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return(
    <Modal  
      visible={isModalVisible} 
      closable={true}
      onCancel={handleCancel}
      footer={null}
      className="anounceComp__frame"
      closeIcon={<img src={cancel} alt="Cat Ok" className="anounceComp-img__cancel"/>}
    >
    <img src={catOk} alt="Cat Ok" className="anounceComp-img__ok"/>
    
    <h2 className="anounceComp-info">
      The pet has been successfully added to the wishlist.
    </h2>    
  </Modal>
  )
  
};

export default AnounceComp;
