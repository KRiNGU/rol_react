import "./App.css";
import React from "react";
import UserInfo from "../UserInfo/UserInfo.jsx";
import Card from "../Card/Card.jsx";
import EditUserPopup from "../Popup/EditUserPopup/EditUserPopup.jsx";
import AddCardPopup from "../Popup/AddCardPopup/AddCardPopup.jsx";
import ImgPopup from "../Popup/ImgPopup/ImgPopup.jsx"

const userName = "Alexandr";
const description = "JS junior Dev";
const link =
  "https://kubnews.ru/upload/iblock/aed/aede721d1ff8a00da41315253fc7aec7.jpg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        name: userName,
        description: description,
        avatar: link,
      },
      cardList: [
        { title: "Snake", link: link, id: 0 },
        { title: "Snake", link: link, id: 1 },
        { title: "Snake", link: link, id: 2 },
        { title: "Snake", link: link, id: 3 },
        { title: "Snake", link: link, id: 4 },
      ],
      editUserOpen: false,
      name: "",
      description: "",
      avatar: "",
      addCardOpen: false,
      title: '',
      "card-url": '',
      imgOpen: false,
      imgTitle: '',
      imgLink: ''
    };
  }

  deleteCard(id) {
    this.setState((prevState) => ({
      cardList: prevState.cardList.filter((card) => card.id !== id),
    }));
  }

  toggleModal(modal) {
    this.setState((prevState) => ({ [modal]: !prevState[modal] }));
  }

  openImage(id) {
    this.setState((prevState)=>({imgTitle: prevState.cardList[id].title, imgLink: prevState.cardList[id].link}))
    this.toggleModal('imgOpen');
  }

  onInputChange(id, value) {
    this.setState({ [id]: value });
  }

  onUserEditSubmit(e) {
    e.preventDefault();
    this.setState({
      info: {
        name: this.state.name,
        description: this.state.description,
        avatar: this.state.avatar,
      },
    });
    this.toggleModal('editUserOpen');
  }

  keyPressed(event) {
    if(event.code === 'Escape') {
      this.setState({editUserOpen: false, addCardOpen: false, imgOpen: false});
    }
  }

  onAddCardSubmit(e) {
    e.preventDefault();
    const newId = this.state.cardList.length;
    const newCardList = this.state.cardList;
    newCardList.push({title: this.state.title, link: this.state['card-url'], id: newId});
    this.setState({cardList: newCardList});
    this.toggleModal('addCardOpen');
  }

  render() {
    return (
      <main className="main"
        onKeyDown={(e) => this.keyPressed(e)}
        tabIndex="0"
      >
        <UserInfo
          info={this.state.info}
          openEditUserPopup={() => this.toggleModal('editUserOpen')}
          openAddCardPopup={() => this.toggleModal('addCardOpen')}
        />
        <ul className="cards">
          {this.state.cardList.map((card, index) => (
            <Card
              key={card.id}
              title={card.title}
              link={card.link}
              onClick={() => this.deleteCard(card.id)}
              onImgClick={()=>this.openImage(index)}
            />
          ))}
        </ul>
        <EditUserPopup
          onChange={(id, value) => this.onInputChange(id, value)}
          onSubmit={(e) => this.onUserEditSubmit(e)}
          onClick={() => this.toggleModal('editUserOpen')}
          name={this.state.name}
          description={this.state.description}
          avatar={this.state.avatar}
          open={this.state.editUserOpen}
        />
        <AddCardPopup
          onChange={(id, value) => this.onInputChange(id, value)}
          onSubmit={(e) => this.onAddCardSubmit(e)}
          onClick={() => this.toggleModal('addCardOpen')}
          title={this.state.title}
          card={this.state["card-url"]}
          open={this.state.addCardOpen}
        />
        <ImgPopup
          title={this.state.imgTitle}
          src={this.state.imgLink}
          open={this.state.imgOpen}
          onClick={()=>this.toggleModal('imgOpen')}
          onOverlayClick={(e)=>{
            if (e.target.title === "overlay") {
              this.toggleModal('imgOpen');
            }
          }}
        />
      </main>
    );
  }
}

export default App;
