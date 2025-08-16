import { useState } from 'react';
import { Image } from 'lucide-react';
import Avatar from '../UI/Avatar';
import Button from '../UI/Button';

const PostComposer = ({ user, onSubmit }) => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      onSubmit(content.trim(), image);
      setContent('');
      setImage(null);
      setImagePreview(null);
    }
  };

  const removeImage = () => {
    setImage(null);
    setImagePreview(null);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-bg-card rounded-3xl p-6 mb-6 border border-[#232326] shadow-lg">
      <div className="flex gap-3 mb-4">
        <Avatar 
          character={user.avatar} 
          index={user.username.charCodeAt(0)} 
          size="lg"
        />
        <div className="flex-1 min-w-0">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Start a thread..."
            className="w-full bg-transparent text-color-primary placeholder-color-secondary border-none outline-none resize-vertical min-h-[70px] text-lg"
            required
          />
          
          {imagePreview && (
            <div className="relative mt-3 inline-block">
              <img 
                src={imagePreview} 
                alt="Preview" 
                className="max-w-45 max-h-32 rounded-lg object-contain border border-[#232326]"
              />
              <button
                type="button"
                onClick={removeImage}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
              >
                ×
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <label className="flex items-center gap-2 text-color-accent cursor-pointer hover:bg-[#232326] rounded-lg px-3 py-2 transition-colors">
          <Image size={20} />
          <span className="font-semibold">Add Photo</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </label>

        <Button type="submit" disabled={!content.trim()}>
          Post
        </Button>
      </div>
    </form>
  );
};

export default PostComposer;
