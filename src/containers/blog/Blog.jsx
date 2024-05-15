import { Article } from "../../components"
import "./blog.css"
import {blog01, blog02, blog03, blog04, blog05} from "./imports"

export default function Blog() {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening, We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imageUrl={blog01} date="May 14, 2024" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className="gpt3__blog-container_groupB">
        <Article imageUrl={blog02} date="May 14, 2024" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imageUrl={blog03} date="May 14, 2024" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imageUrl={blog04} date="May 14, 2024" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imageUrl={blog05} date="May 14, 2024" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
      </div>
    </div>
  )
}


