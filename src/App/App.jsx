import './App.css'
import React from 'react'
import UserInfo from '../UserInfo/UserInfo.jsx'
import Card from '../Card/Card.jsx'
import EditUserPopup from '../Popup/EditUserPopup/EditUserPopup.jsx'

const userName = "Alexandr";
const description = 'JS junior Dev';
const link = 'https://kubnews.ru/upload/iblock/aed/aede721d1ff8a00da41315253fc7aec7.jpg';

const openAddCardPopup = ()=>{
  alert();
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        name: userName,
        description: description,
        avatar: link
      },
      cardList: [
        {title: 'Snake', link: link, id: 0},
        {title: 'Snake', link: link, id: 1},
        {title: 'Snake', link: link, id: 2},
        {title: 'Snake', link: link, id: 3},
        {title: 'Snake', link: link, id: 4},
      ],
      editUserOpen: false,
      name: '',
      description: '',
      avatar: ''
    }
  }

  deleteCard(id) {
    this.setState((prevState)=>({cardList: prevState.cardList.filter((card) => card.id !== id)}));
  }

  renderCard({title, link, id}){
    return (
      <Card 
        key={id}
        title={title}
        link={link}
        onClick={()=>this.deleteCard(id)}
      />
    );
  }

  toggleEditUser() {
    this.setState((prevState)=>({editUserOpen: !prevState.editUserOpen}));
  }

  onInputChange(id, value) {
    this.setState({[id]: value})
  }

  onUserEditSubmit(e) {
    e.preventDefault();
    this.setState({info: {
      name: this.state.name,
      description: this.state.description,
      avatar: this.state.avatar
    }})
    this.toggleEditUser();
  }

  render() {
    return (
      <main className="main">
        <UserInfo 
          info={this.state.info}
          openEditUserPopup={()=>this.toggleEditUser()}
          openAddCardPopup={openAddCardPopup}
        />
        <ul className="cards">
          {this.state.cardList.map((card) =>
            this.renderCard(card)
          )}
        </ul>
        <EditUserPopup
          onChange={(id, value)=>this.onInputChange(id, value)}
          onSubmit={(e)=>this.onUserEditSubmit(e)}
          onClick={() => this.toggleEditUser()}
          name={this.state.name}
          description={this.state.description}
          avatar={this.state.avatar}
          open={this.state.editUserOpen}
        />
      </main>
    );
  }
}

export default App;
