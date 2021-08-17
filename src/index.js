import React from "react";
import ReactDom from "react-dom";
import "./index.css"

const Person = ({img=75, name, job, gender='women', children}) => {
  const src = `https://randomuser.me/api/portraits/${gender}/${img.toString()}.jpg`;
  //console.log(src);

  return (
    <article className="person">
      <img src={src} alt="person pic"/>
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  )

}

const PersonList = () => {
  return (
    <section className="person-list">
      <Person img='75' name='Jane' job='Developer' gender='women'/>
      <Person img='23' name='Sally' job='Artist' gender='women'>
        <p>info about this person</p>
      </Person>
      <Person img='21' name='Bill' job='Tester' gender='men'/>
    </section>
  )
}

ReactDom.render(<PersonList></PersonList>, document.getElementById('root'))