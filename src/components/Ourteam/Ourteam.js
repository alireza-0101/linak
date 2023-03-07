import React, { Component } from 'react'
import './Ourteam.css'
import TeamBox from '../TeamBox/TeamBox'

export default class Ourteam extends Component {

  constructor(props) {
    super(props)

    this.state = {
      team: [
        {
          name: 'استیون اسمیت',
          responsibility: 'مدیریت مجموعه',
          img: 'image/team-img1.jpg',
          socialLink: {
            instagram: '#',
            telegram: '#',
            github: '#',
            linkedin: '#'
          }
        },
        {
          name: 'آماندا ایاکو',
          responsibility: 'سئو کار تخصصی',
          img: 'image/team-img2.jpg',
          socialLink: {
            instagram: '#',
            telegram: '#',
            github: '#',
            linkedin: '#'
          }
        },
        {
          name: 'باب هاوکینگ',
          responsibility: 'فرانت اند کار',
          img: 'image/team-img3.jpg',
          socialLink: {
            instagram: '#',
            telegram: '#',
            github: '#',
            linkedin: '#'
          }
        },
        {
          name: 'لارا ونسونی',
          responsibility: 'بک اند کار',
          img: 'image/team-img4.jpg',
          socialLink: {
            instagram: '#',
            telegram: '#',
            github: '#',
            linkedin: '#'
          }
        },
      ]
    }

  }

  render() {
    return (
      <div className='our-team-wrapper' id='Ourteam'>
        <div className="section-title">
          <h2>تخصص <b>تیم ما</b></h2>
          <p>
            یک واقعیت طولانی مدت این است که محتوای قابل خواندن یک صفحه باعث می شود خواننده از تمرکز بر طرح کلی متن یا فرم پاراگراف های قرار داده شده در صفحه مورد نظر خود منحرف شود.
          </p>
        </div>

        <div className="team-box-wrapper">
          {
            this.state.team.map(person => {
              return <TeamBox key={person.name} {...person} />
            })
          }
        </div>

        <img src="image/5.png" alt="butiful image" className="bottom-right-img" />
        <img src="image/4.png" alt="butiful image" className="top-right-img" />
        <img src="image/1.png" alt="butiful image" className="top-left-img" />

      </div>
    )
  }
}
