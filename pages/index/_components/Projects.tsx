import { Index } from 'solid-js'
import ProjectItem from './ProjectItem'

export default () => {
  const projectLists = [
    {
      name: 'GitLab',
      desc: 'An elegant theme for VS Code.',
      link: 'https://github.com/moegi-design/vscode-theme',
      icon: 'i-logos-gitlab',
    }, {
      name: 'Nexus',
      desc: 'Bilibili-live danmu dashboard in your terminal.',
      link: 'https://github.com/ddiu8081/bilicli',
      icon: 'i-fluent-emoji-flat-package',
    }, {
      name: 'Notion',
      desc: 'Bilibili-live danmu listener with type.',
      link: 'https://github.com/ddiu8081/blive-message-listener',
      icon: 'i-logos-notion-icon',
    }, {
      name: 'Drawio',
      desc: 'City bus visualizations of China',
      link: 'https://bus.ljl.li/',
      icon: 'i-vscode-icons-file-type-drawio',
    }, {
      name: 'Tin',
      desc: 'Mathematical arts driven by t, i and anything',
      link: 'https://tin.ddiu.io/',
      icon: 'i-fluent-emoji-flat-eight-spoked-asterisk',
    }, {
      name: 'oreooo',
      desc: 'An oreo generater',
      link: 'https://oreo.ddiu.io/',
      icon: 'i-fluent-emoji-flat-cookie',
    }, {
      name: 'Fluent emoji maker',
      desc: 'Generate your own Fluent Emojis!',
      link: 'https://emoji.ddiu.io/',
      icon: 'i-fluent-emoji-flat-rolling-on-the-floor-laughing',
    }, {
      name: 'placeholder-image',
      desc: 'Generate placeholder images by simply adding params',
      link: 'https://ph.ljl.li/',
      icon: 'i-fluent-emoji-flat-ice',
    }, {
      name: 'Ghost theme Moegi',
      desc: 'An elegant & fresh ghost theme',
      link: 'https://github.com/moegi-design/ghost-theme-Moegi',
      icon: 'i-fluent-emoji-flat-newspaper',
    }, {
      name: 'Diu\'s Online Riddle',
      desc: 'An online puzzle game',
      link: 'https://riddle.ddiu.me/',
      icon: 'i-fluent-emoji-flat-exploding-head',
    },
  ]
  const openLink = () => {
    window.open('https://github.com/blackmanbachen', '_blank')
  }
  return (
    <>
      <h2 class="flex items-center mt-14 mb-4 font-semibold text-3xl">
        <span flex-1 class="title">Projects</span>        
      </h2>
      <div class="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <Index each={projectLists}>
          {item => (
            <ProjectItem data={item()} />
          )}
        </Index>
      </div>
    </>
  )
}
