import './stories.scss'
import img from '../../assets/login_bg.jpeg'
import profile from '../../assets/register_bg.jpeg'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'

const Stories = () => {

  const { currentUser } = useContext(AuthContext);

  //Temp
  const stories = [
    {
      id: 1,
      name: "john Doe",
      img: img
    },
    {
      id: 2,
      name: "john Doe",
      img: img
    },
    {
      id: 3,
      name: "john Doe",
      img: img
    },
    {
      id: 4,
      name: "john Doe",
      img: img
    },
  ]

  return (
    <div className='stories'>
      <div className="story">
        <img src={profile} alt={currentUser.name} />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map(story => (
        <div className="story" key={story.id}>
          <img src={story.img} alt={story.name} />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories