import "./App.css";
import React, {useState} from "react";
import {DragDropContext, Droppable} from 'react-beautiful-dnd';

import UserInfo from "../UserInfo/UserInfo.jsx";
import Card from "../Card/Card.jsx";
import EditUserPopup from "../Popup/EditUserPopup/EditUserPopup.jsx";
import AddCardPopup from "../Popup/AddCardPopup/AddCardPopup.jsx";
import ImgPopup from "../Popup/ImgPopup/ImgPopup.jsx"

const userName = "Alexandr";
const description = "JS junior Dev";
const link =
  "https://kubnews.ru/upload/iblock/aed/aede721d1ff8a00da41315253fc7aec7.jpg";

function App(props) {
  const [info, setInfo] = useState({name: userName, description: description, avatar: link});
  const [cardList, setCardList] = useState([
    { title: "Snake", link: link, id: 0 },
    { title: "Snake", link: link, id: 1 },
    { title: "Snake", link: link, id: 2 },
    { title: "Snake", link: link, id: 3 },
    { title: "Snake", link: link, id: 4 }
  ]);
  const [userPopupInfo, setUserPopupInfo] = useState({isOpen: false, name: '', description: '', avatar: ''});
  const [cardPopupInfo, setCardPopupInfo] = useState({isOpen: false, title: '', link: ''});
  const [imgOpenPopupInfo, setImgOpenPopupInfo] = useState({isOpen: false, title: '', link: ''});


  const deleteCard = (id) => {
    setCardList(cardList.filter(card => card.id !== id));
  }

  const toggleEditUser = () => {
    setUserPopupInfo(prevState => ({...prevState, isOpen: !prevState.isOpen}));
  }

  const toggleAddCard = () => {
    setCardPopupInfo(prevState => ({...prevState, isOpen: !prevState.isOpen}));
  }

  const toggleImgOpen = () => {
    setImgOpenPopupInfo(prevState => ({...prevState, isOpen: !prevState.isOpen}));
  }

  const openImage = (id) => {
    setImgOpenPopupInfo({isOpen: imgOpenPopupInfo.isOpen, title: cardList[id].title, link: cardList[id].link});
    toggleImgOpen();
  }

  const onUserEditSubmit = (e) => {
    e.preventDefault();
    setInfo({name: userPopupInfo.name, description: userPopupInfo.description, avatar: userPopupInfo.avatar});
    toggleEditUser();
  }

  const keyPressed = (event) => {
    if (event.code === 'Escape') {
      setUserPopupInfo(prevState => ({...prevState, isOpen: false}));
      setCardPopupInfo(prevState => ({...prevState, isOpen: false}));
      setImgOpenPopupInfo(prevState => ({...prevState, isOpen: false}));
    }
  }

  const onAddCardSubmit = (e) => {
    e.preventDefault();
    const newCard = {title: cardPopupInfo.title, link: cardPopupInfo.link, id: cardList.length};
    setCardList(prevState => [...prevState, newCard]);
    toggleAddCard();
  };

  const handleOnDragEnd = (result) => {
    const cards = Array.from(cardList);
    const [reorderedCards] = cards.splice(result.source.index, 1);
    cards.splice(result.destination.index, 0, reorderedCards);

    setCardList(cards);
  }

    return (
      <main className="main"
        onKeyDown={(e) => keyPressed(e)}
        tabIndex="0"
      >
        <UserInfo
          info={info}
          openEditUserPopup={() => toggleEditUser()}
          openAddCardPopup={() => toggleAddCard()}
        />
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="cards">
            {(provided) => (
              <ul type="none" className="cards" {...provided.droppableProps} ref={provided.innerRef}>
                {cardList.map((card, index) => (
                  <Card
                    index={index}
                    key={card.id}
                    identifier={card.id}
                    title={card.title}
                    link={card.link}
                    onClick={() => deleteCard(card.id)}
                    onImgClick={()=> openImage(index)}
                  />
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
        <EditUserPopup
          onChange={(field, value) => setUserPopupInfo(prevState => ({...prevState, [field]: value}))}
          onSubmit={(e) => onUserEditSubmit(e)}
          onClick={() => toggleEditUser()}
          name={userPopupInfo.name}
          description={userPopupInfo.description}
          avatar={userPopupInfo.avatar}
          open={userPopupInfo.isOpen}
        />
        <AddCardPopup
          onChange={(field, value) => setCardPopupInfo(prevState => ({...prevState, [field]: value}))}
          onSubmit={(e) => onAddCardSubmit(e)}
          onClick={() => toggleAddCard()}
          title={cardPopupInfo.title}
          card={cardPopupInfo.link}
          open={cardPopupInfo.isOpen}
        />
        <ImgPopup
          title={imgOpenPopupInfo.title}
          src={imgOpenPopupInfo.link}
          open={imgOpenPopupInfo.isOpen}
          onClick={()=> toggleImgOpen()}
          onOverlayClick={(e)=>{
            if (e.target === e.currentTarget) {
              toggleImgOpen();
            }
          }}
        />
      </main>
    );
}

export default App;
