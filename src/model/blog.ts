import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
      },
      content: {
        type: String,
        required: true,
        trim: true
      },
    //   author: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    //   },
      slug: {
        type: String,
        unique: true
      },
      tags: [
        {
          type: String
        }
      ],
      status: {
        type: String,
        enum: ['draft', 'published'],
        default: 'draft'
      },
    //   comments: [
    //     {
    //       type: mongoose.Schema.Types.ObjectId,
    //       ref: 'Comment'
    //     }
    //   ]
},{timestamps:true})


const Blog = mongoose.models.blogs || mongoose.model('blogs',blogSchema)

export default Blog


