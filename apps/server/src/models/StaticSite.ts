import mongoose from 'mongoose';

const siteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'provide a name for your site'],
    },
    url: {
      type: String,
      default: '',
    },
    source: {
      type: String,
      enum: ['github', 'local'],
      default: 'local',
    },
    owner: {
      type: String,
      required: [true, 'No owner has been specified'],
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model('User', siteSchema);
