import { defineStore } from 'pinia' // pinia package has pre defined functions like defineStore

export const usePostsStore = defineStore('posts', {
  //posts is inside Proxy(Object) Target and then $id: posts
  //Define Store to create
  // Inside is State is Data, Getter : Computed, and Actions
  state: () => {
    return {
      posts: [
        {
          id: 1,
          title: 'Sample Post 1',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          author: 'Pedro Penduco',
          created_at: '10/06/2024',
          is_saved: false,
        },
        {
          id: 2,
          title: 'Sample Post 2',
          body: 'Sed non velit velit. Integer nec odio metus. Donec ut turpis ac libero pharetra gravida. Fusce efficitur lectus quis ante dapibus, ut interdum lorem fermentum. Vivamus suscipit, turpis ut cursus tincidunt, elit augue tincidunt magna, ac scelerisque felis lorem non arcu.',
          author: 'Pedro Penduco',
          created_at: '10/06/2024',
          is_saved: false,
        },
        {
          id: 3,
          title: 'Sample Post 3',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          author: 'Pedro Penduco',
          created_at: '10/08/2024',
          is_saved: false,
        },
        {
          id: 4,
          title: 'Sample Post 4',
          body: 'Mauris in nisl et tortor tempor accumsan in id felis. Curabitur tincidunt magna in augue luctus, sit amet gravida enim posuere. Sed non velit velit. Integer nec odio metus. Donec ut turpis ac libero pharetra gravida.',
          author: 'Pedro Penduco',
          created_at: '10/08/2024',
          is_saved: false,
        },
        {
          id: 5,
          title: 'Sample Post 5',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          author: 'Pedro Penduco',
          created_at: '10/10/2024',
          is_saved: false,
        },
      ],
    }
  },
})