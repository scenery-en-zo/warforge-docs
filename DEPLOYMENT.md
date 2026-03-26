# Deploying to GitHub Pages

## Quick Setup

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Build and deployment**:
   - **Source**: Select `GitHub Actions`
   - **Branch**: Leave default (workflow handles this)

### 2. Update Configuration

Edit `docusaurus.config.js` with your repository info:

```javascript
// For GitHub Pages (public or private repo)
url: 'https://your-username.github.io',
baseUrl: '/your-repo-name/',

// If using custom domain (optional)
url: 'https://docs.yourdomain.com',
baseUrl: '/',
```

### 3. Push to Main Branch

```bash
git add .
git commit -m "Add GitHub Pages deployment"
git push origin main
```

The workflow will automatically:
1. Install dependencies with `npm ci`
2. Build the Docusaurus site
3. Deploy to GitHub Pages
4. Your site will be live at: `https://your-username.github.io/your-repo-name/`

## GitHub Pages is FREE!

✅ **Private repositories**: Free GitHub Pages (since 2021)
✅ **Public repositories**: Free GitHub Pages
✅ **Custom domains**: Free
✅ **HTTPS**: Free

### Limits (Free Tier)
- 100 GB/month bandwidth
- 10 builds/hour
- No credit card required

## Manual Deployment

To trigger a deployment manually:

1. Go to **Actions** tab
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**
4. Select branch (usually `main`)
5. Click **Run workflow**

## Custom Domain (Optional)

1. Add a `CNAME` file in the `static/` folder:
   ```
   docs.yourdomain.com
   ```

2. Update DNS records at your domain provider:
   - **CNAME**: `docs` → `your-username.github.io`

3. Update `docusaurus.config.js`:
   ```javascript
   url: 'https://docs.yourdomain.com',
   baseUrl: '/',
   ```

## Troubleshooting

### Build Fails
```bash
# Test locally first
npm run build
```

### 404 on Pages
- Check `baseUrl` matches your repo name
- Ensure workflow completed successfully
- Check **Settings** → **Pages** for deployment status

### Assets Not Loading
- Verify `baseUrl` is correct
- Check browser console for 404 errors
- May need to clear cache

## Workflow File

The deployment workflow is at: `.github/workflows/deploy.yml`

It:
- Runs on every push to `main`
- Can be triggered manually
- Uses npm for package management
- Builds to `./build` folder
- Deploys via GitHub Pages action
