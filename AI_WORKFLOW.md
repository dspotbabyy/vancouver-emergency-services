# AI Content & Image Update Workflow

## 🖼️ Image Generation Process

### 1. Generate Images with AI
**Prompts for DALL-E/Midjourney:**

**Plumbing Images:**
- "Professional Vancouver plumber in blue uniform fixing pipes, modern home interior, high quality, realistic --ar 16:9"
- "Emergency plumbing van with 'Vancouver Emergency Services' branding, professional, clean --ar 16:9"
- "Before/after pipe repair, split screen, professional quality --ar 16:9"

**Electrical Images:**
- "Licensed electrician working on electrical panel, safety equipment, Vancouver residential home --ar 16:9"
- "Modern electrical panel upgrade, before/after comparison --ar 16:9"
- "Emergency electrical repair at night, professional service truck --ar 16:9"

### 2. Add Images to Project
```bash
# Download AI images and add to:
public/images/plumbing/
public/images/electrical/
```

### 3. Update Components
Ask Claude Code to update image references in components.

## 📝 Content Generation Process

### 1. Service Descriptions
**AI Prompt:** "Write compelling emergency plumbing service descriptions for Vancouver, emphasizing speed, professionalism, and 24/7 availability"

### 2. SEO Content
**AI Prompt:** "Create SEO-optimized content for emergency electrical services in Vancouver, include local keywords"

### 3. Customer Testimonials
**AI Prompt:** "Generate realistic customer testimonials for Vancouver emergency plumbing services"

## 🚀 Implementation Steps

1. **Generate Content**: Use AI to create copy
2. **Ask Claude Code**: "Update [page] with this new content"
3. **Generate Images**: Create with AI image tools
4. **Upload Images**: Add to `public/images/` folders
5. **Update References**: Ask Claude Code to update image paths
6. **Deploy**: `vercel --prod` to update live site

## 🔄 Continuous Updates

**Monthly AI Updates:**
- Refresh service descriptions
- Update seasonal content
- Generate new images
- Optimize for local SEO

**Commands to use with Claude Code:**
- "Update plumbing page with more persuasive copy"
- "Add a testimonials section to the homepage"
- "Create better emergency service descriptions"
- "Optimize contact page for Vancouver local SEO"