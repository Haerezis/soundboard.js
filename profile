
   lazy.nvim (H)   Install (I)   Update (U)   Sync (S)   Clean (X)   Check (C)   Log (L)   Restore (R)   Profile (P)   Debug (D)  
   Help (?) 

  Startuptime: 189.95ms

  Based on the actual CPU time of the Neovim process till UIEnter.
  This is more accurate than `nvim --startuptime`.
    LazyStart 20.66ms
    LazyDone  133.98ms (+113.32ms)
    UIEnter   189.95ms (+55.96ms)

  Profile

  You can press <C-s> to change sorting between chronological order & time taken.
  Press <C-f> to filter profiling entries that took more time than a given threshold

    ●  lazy.nvim 54.78ms
      ➜  module 3ms
      ➜  config 1.04ms
      ➜  spec 40.48ms
        ★  astronvim.plugins._astrocore 2.52ms
          ‒  astronvim.lazy_snapshot 1.18ms
        ★  astronvim.plugins._astrocore_autocmds 0.94ms
        ★  astronvim.plugins._astrocore_mappings 0.84ms
        ★  astronvim.plugins._astrocore_options 0.87ms
        ★  astronvim.plugins._astrolsp 0.47ms
        ★  astronvim.plugins._astrolsp_autocmds 0.53ms
        ★  astronvim.plugins._astrolsp_mappings 0.9ms
        ★  astronvim.plugins._astrotheme 0.56ms
        ★  astronvim.plugins._astroui 0.68ms
        ★  astronvim.plugins._astroui_status 0.86ms
        ★  astronvim.plugins.aerial 0.8ms
        ★  astronvim.plugins.alpha 1.11ms
        ★  astronvim.plugins.autopairs 0.58ms
        ★  astronvim.plugins.better-escape 0.45ms
        ★  astronvim.plugins.cmp_luasnip 2.03ms
        ★  astronvim.plugins.colorizer 1.47ms
        ★  astronvim.plugins.comment 0.87ms
        ★  astronvim.plugins.dap 0.77ms
        ★  astronvim.plugins.dressing 0.58ms
        ★  astronvim.plugins.gitsigns 0.54ms
        ★  astronvim.plugins.guess-indent 0.55ms
        ★  astronvim.plugins.heirline 0.69ms
        ★  astronvim.plugins.indent-blankline 0.84ms
        ★  astronvim.plugins.lspconfig 0.68ms
        ★  astronvim.plugins.lspkind 0.85ms
        ★  astronvim.plugins.mason 0.59ms
        ★  astronvim.plugins.mini-bufremove 0.54ms
        ★  astronvim.plugins.neo-tree 1.13ms
        ★  astronvim.plugins.neodev 0.64ms
        ★  astronvim.plugins.none-ls 0.71ms
        ★  astronvim.plugins.notify 0.82ms
        ★  astronvim.plugins.nvim-ufo 0.63ms
        ★  astronvim.plugins.resession 0.7ms
        ★  astronvim.plugins.smart-splits 0.52ms
        ★  astronvim.plugins.telescope 0.59ms
        ★  astronvim.plugins.todo-comments 0.96ms
        ★  astronvim.plugins.toggleterm 0.52ms
        ★  astronvim.plugins.treesitter 0.86ms
        ★  astronvim.plugins.ts-autotag 0.82ms
        ★  astronvim.plugins.ts-context-commentstring 0.37ms
        ★  astronvim.plugins.vim-illuminate 0.48ms
        ★  astronvim.plugins.web-devicons 0.42ms
        ★  astronvim.plugins.which-key 0.55ms
        ★  astronvim.plugins.window-picker 0.66ms
        ★  community 0.18ms
        ★  plugins.astrocore 0.34ms
        ★  plugins.astrolsp 0.21ms
        ★  plugins.astroui 0.15ms
        ★  plugins.mason 0.15ms
        ★  plugins.none-ls 0.11ms
        ★  plugins.treesitter 0.18ms
        ★  plugins.user 0.13ms
      ➜  state 0.67ms
      ➜  install 0.07ms
      ➜  handlers 8.43ms
    ●  startup 67.85ms
      ➜  runtime/filetype.lua 0.36ms
      ➜  init 2.41ms
        ★  init  nvim-notify 0.01ms
        ★  init  mason-null-ls.nvim 0.05ms
        ★  init  mason-lspconfig.nvim 0.03ms
        ★  init  mason-nvim-dap.nvim 0.03ms
        ★  init  nvim-ts-context-commentstring 0.05ms
        ★  init  dressing.nvim 0.16ms
        ★  init  nvim-treesitter 1.93ms
      ➜  start 61.43ms
        ★  start  AstroNvim 0.16ms
        ★  start  astrocore 61.16ms
          ‒  astroui 23.67ms
            ●  astrotheme 2ms
      ➜  rtp plugins 3.24ms
        ★  runtime/plugin/editorconfig.lua 0.22ms
        ★  runtime/plugin/man.lua 0.18ms
        ★  runtime/plugin/matchit.vim 1.12ms
        ★  runtime/plugin/matchparen.vim 0.37ms
        ★  runtime/plugin/osc52.lua 0.16ms
        ★  runtime/plugin/rplugin.vim 0.41ms
        ★  runtime/plugin/shada.vim 0.2ms
        ★  runtime/plugin/spellfile.vim 0.12ms
        ★  runtime/plugin/tutor.vim 0.1ms
      ➜  after 0.14ms
    ●  BufEnter 6.93ms
      ➜  heirline.nvim 6.73ms
    ●  nvim-web-devicons 14.78ms
      ➜  nvim-web-devicons/plugin/nvim-web-devicons.vim 0.23ms
    ●  VeryLazy 36.18ms
      ➜  which-key.nvim 32.01ms
        ★  which-key.nvim/plugin/which-key.vim 0.12ms
      ➜  smart-splits.nvim 3.97ms
        ★  smart-splits.nvim/plugin/init.lua 0.33ms
        ★  smart-splits.nvim/plugin/smart-splits.lua 3.2ms
    ●  User AstroFile 290.08ms
      ➜  indent-blankline.nvim 14.5ms
        ★  after/plugin/commands.lua 5.71ms
      ➜  nvim-colorizer.lua 13.59ms
        ★  nvim-colorizer.lua/plugin/colorizer.lua 0.29ms
      ➜  nvim-treesitter 58.23ms
        ★  nvim-treesitter-textobjects 9.57ms
          ‒  nvim-treesitter-textobjects/plugin/nvim-treesitter-textobjects.vim 8.94ms
        ★  nvim-treesitter/plugin/nvim-treesitter.lua 1.92ms
        ★  mason.nvim 7.2ms
      ➜  todo-comments.nvim 15.95ms
        ★  plenary.nvim 1.07ms
          ‒  plenary.nvim/plugin/plenary.vim 0.2ms
        ★  todo-comments.nvim/plugin/todo.vim 0.18ms
      ➜  nvim-lspconfig 127.63ms
        ★  astrolsp 11.63ms
        ★  neoconf.nvim 8.15ms
        ★  mason-lspconfig.nvim 106.79ms
          ‒  neodev.nvim 5.24ms
        ★  nvim-lspconfig/plugin/lspconfig.lua 0.51ms
      ➜  nvim-autopairs 6.03ms
      ➜  none-ls.nvim 23.12ms
        ★  mason-null-ls.nvim 22.16ms
      ➜  nvim-ufo 10.07ms
        ★  promise-async 1.02ms
      ➜  vim-illuminate 3.56ms
        ★  vim-illuminate/plugin/illuminate.vim 3.12ms
      ➜  guess-indent.nvim 2.57ms
      ➜  aerial.nvim 2.48ms
      ➜  nvim-ts-autotag 11.88ms
        ★  nvim-ts-autotag/plugin/nvim-ts-autotag.lua 4.43ms
    ●  User AstroGitFile 10.94ms
      ➜  gitsigns.nvim 10.74ms
    ●  mason-nvim-dap.nvim 536.71ms
      ➜  nvim-dap 530.45ms
        ★  nvim-dap-ui 25.59ms
          ‒  nvim-nio 0.97ms
        ★  cmp-dap 502.97ms
          ‒  nvim-cmp 497.19ms
            ●  cmp_luasnip 27.78ms
              ➜  after/plugin/cmp_luasnip.lua 21.58ms
            ●  cmp-buffer 1.98ms
              ➜  after/plugin/cmp_buffer.lua 1.54ms
            ●  cmp-path 7.84ms
              ➜  after/plugin/cmp_path.lua 7.66ms
            ●  cmp-nvim-lsp 6.89ms
              ➜  after/plugin/cmp_nvim_lsp.lua 6.41ms
            ●  nvim-cmp/plugin/cmp.lua 1.02ms
            ●  LuaSnip 442.56ms
              ➜  friendly-snippets 5.92ms
              ➜  LuaSnip/plugin/luasnip.lua 17.52ms
              ➜  LuaSnip/plugin/luasnip.vim 0.16ms
            ●  lspkind.nvim 2.04ms
          ‒  after/plugin/cmp_dap.lua 1.01ms
        ★  nvim-dap/plugin/dap.lua 0.58ms
    ●  InsertCharPre 2.22ms
      ➜  better-escape.nvim 2.07ms
      ➜  better_escape 0.05ms
    ●  nvim-notify 25.3ms























   lazy.nvim (H)   Install (I)   Update (U)   Sync (S)   Clean (X)   Check (C)   Log (L)   Restore (R)   Profile (P)   Debug (D)  
   Help (?) 

  Startuptime: 225.5ms

  Based on the actual CPU time of the Neovim process till UIEnter.
  This is more accurate than `nvim --startuptime`.
    LazyStart 77.98ms
    LazyDone  185.99ms (+108.01ms)
    UIEnter   225.5ms (+39.51ms)

  Profile

  You can press <C-s> to change sorting between chronological order & time taken.
  Press <C-f> to filter profiling entries that took more time than a given threshold

    ●  mason-nvim-dap.nvim 346.7ms
      ➜  nvim-dap 343.41ms
        ★  cmp-dap 304.1ms
          ‒  nvim-cmp 302.44ms
            ●  LuaSnip 201.01ms
              ➜  LuaSnip/plugin/luasnip.lua 17.21ms
              ➜  friendly-snippets 2.26ms
              ➜  LuaSnip/plugin/luasnip.vim 0.31ms
            ●  cmp_luasnip 53.66ms
              ➜  after/plugin/cmp_luasnip.lua 51.82ms
            ●  cmp-buffer 14.2ms
              ➜  after/plugin/cmp_buffer.lua 13.5ms
            ●  cmp-path 12.04ms
              ➜  after/plugin/cmp_path.lua 10.53ms
            ●  cmp-nvim-lsp 9.61ms
              ➜  after/plugin/cmp_nvim_lsp.lua 8.48ms
            ●  lspkind.nvim 2.84ms
            ●  nvim-cmp/plugin/cmp.lua 2.77ms
          ‒  after/plugin/cmp_dap.lua 1.03ms
        ★  nvim-dap-ui 36.76ms
          ‒  nvim-nio 1.39ms
        ★  nvim-dap/plugin/dap.lua 0.41ms
    ●  User AstroFile 146.13ms
      ➜  nvim-lspconfig 69.7ms
        ★  mason-lspconfig.nvim 60.63ms
          ‒  mason.nvim 3.96ms
          ‒  neodev.nvim 1.11ms
        ★  neoconf.nvim 4.92ms
        ★  astrolsp 3.29ms
        ★  nvim-lspconfig/plugin/lspconfig.lua 0.25ms
      ➜  none-ls.nvim 16.85ms
        ★  mason-null-ls.nvim 16.15ms
      ➜  nvim-treesitter 15.99ms
        ★  nvim-treesitter-textobjects 3.52ms
          ‒  nvim-treesitter-textobjects/plugin/nvim-treesitter-textobjects.vim 2.92ms
        ★  nvim-treesitter/plugin/nvim-treesitter.lua 1.29ms
      ➜  vim-illuminate 9.9ms
        ★  vim-illuminate/plugin/illuminate.vim 9.54ms
      ➜  indent-blankline.nvim 9.02ms
        ★  after/plugin/commands.lua 3ms
      ➜  nvim-ufo 6.87ms
        ★  promise-async 0.63ms
      ➜  nvim-ts-autotag 4.64ms
        ★  nvim-ts-autotag/plugin/nvim-ts-autotag.lua 2.46ms
      ➜  nvim-colorizer.lua 3.29ms
        ★  nvim-colorizer.lua/plugin/colorizer.lua 0.18ms
      ➜  nvim-autopairs 3.14ms
      ➜  todo-comments.nvim 2.8ms
        ★  plenary.nvim 0.56ms
          ‒  plenary.nvim/plugin/plenary.vim 0.11ms
        ★  todo-comments.nvim/plugin/todo.vim 0.08ms
      ➜  guess-indent.nvim 2.13ms
      ➜  aerial.nvim 1.59ms
    ●  lazy.nvim 58.78ms
      ➜  spec 36.59ms
        ★  astronvim.plugins._astrocore 3.23ms
          ‒  astronvim.lazy_snapshot 1.68ms
        ★  astronvim.plugins.cmp_luasnip 1.49ms
        ★  astronvim.plugins.alpha 1.45ms
        ★  astronvim.plugins._astrocore_autocmds 1.29ms
        ★  astronvim.plugins.colorizer 1.18ms
        ★  astronvim.plugins._astroui_status 1.12ms
        ★  astronvim.plugins.aerial 1.08ms
        ★  astronvim.plugins._astrocore_mappings 0.98ms
        ★  astronvim.plugins._astrolsp_mappings 0.9ms
        ★  astronvim.plugins.gitsigns 0.86ms
        ★  astronvim.plugins.autopairs 0.8ms
        ★  astronvim.plugins._astroui 0.75ms
        ★  astronvim.plugins.better-escape 0.75ms
        ★  astronvim.plugins.dap 0.71ms
        ★  astronvim.plugins.comment 0.67ms
        ★  astronvim.plugins._astrolsp 0.66ms
        ★  astronvim.plugins._astrocore_options 0.65ms
        ★  astronvim.plugins._astrolsp_autocmds 0.64ms
        ★  astronvim.plugins.mason 0.63ms
        ★  astronvim.plugins._astrotheme 0.62ms
        ★  astronvim.plugins.nvim-ufo 0.54ms
        ★  astronvim.plugins.mini-bufremove 0.54ms
        ★  astronvim.plugins.dressing 0.49ms
        ★  astronvim.plugins.lspkind 0.49ms
        ★  astronvim.plugins.telescope 0.47ms
        ★  astronvim.plugins.resession 0.47ms
        ★  astronvim.plugins.heirline 0.46ms
        ★  astronvim.plugins.neo-tree 0.4ms
        ★  astronvim.plugins.lspconfig 0.37ms
        ★  astronvim.plugins.toggleterm 0.37ms
        ★  astronvim.plugins.notify 0.35ms
        ★  astronvim.plugins.smart-splits 0.34ms
        ★  astronvim.plugins.indent-blankline 0.32ms
        ★  astronvim.plugins.guess-indent 0.31ms
        ★  astronvim.plugins.ts-context-commentstring 0.31ms
        ★  astronvim.plugins.vim-illuminate 0.29ms
        ★  astronvim.plugins.neodev 0.29ms
        ★  astronvim.plugins.treesitter 0.28ms
        ★  astronvim.plugins.which-key 0.25ms
        ★  astronvim.plugins.todo-comments 0.25ms
        ★  astronvim.plugins.none-ls 0.23ms
        ★  astronvim.plugins.ts-autotag 0.23ms
        ★  astronvim.plugins.web-devicons 0.23ms
        ★  plugins.astrocore 0.22ms
        ★  astronvim.plugins.window-picker 0.21ms
        ★  plugins.astroui 0.19ms
        ★  plugins.mason 0.18ms
        ★  plugins.astrolsp 0.14ms
        ★  plugins.none-ls 0.13ms
        ★  plugins.treesitter 0.09ms
        ★  plugins.user 0.08ms
        ★  community 0.08ms
      ➜  module 9.8ms
      ➜  handlers 8.3ms
      ➜  config 2.82ms
      ➜  state 0.38ms
      ➜  install 0.07ms
    ●  startup 54.89ms
      ➜  start 47.8ms
        ★  start  astrocore 47.42ms
          ‒  astroui 25.28ms
            ●  astrotheme 1.47ms
        ★  start  AstroNvim 0.25ms
      ➜  init 3.03ms
        ★  init  nvim-treesitter 2.34ms
        ★  init  dressing.nvim 0.36ms
        ★  init  mason-lspconfig.nvim 0.13ms
        ★  init  mason-null-ls.nvim 0.04ms
        ★  init  mason-nvim-dap.nvim 0.03ms
        ★  init  nvim-ts-context-commentstring 0.03ms
        ★  init  nvim-notify 0.01ms
      ➜  rtp plugins 2.95ms
        ★  runtime/plugin/matchit.vim 0.84ms
        ★  runtime/plugin/editorconfig.lua 0.54ms
        ★  runtime/plugin/rplugin.vim 0.3ms
        ★  runtime/plugin/matchparen.vim 0.26ms
        ★  runtime/plugin/man.lua 0.2ms
        ★  runtime/plugin/osc52.lua 0.15ms
        ★  runtime/plugin/shada.vim 0.14ms
        ★  runtime/plugin/spellfile.vim 0.13ms
        ★  runtime/plugin/tutor.vim 0.08ms
      ➜  runtime/filetype.lua 0.93ms
      ➜  after 0.05ms
    ●  VeryLazy 19.15ms
      ➜  which-key.nvim 16.99ms
        ★  which-key.nvim/plugin/which-key.vim 0.1ms
      ➜  smart-splits.nvim 2.06ms
        ★  smart-splits.nvim/plugin/smart-splits.lua 1.52ms
        ★  smart-splits.nvim/plugin/init.lua 0.19ms
    ●  BufEnter 8.93ms
      ➜  heirline.nvim 8.76ms
    ●  nvim-web-devicons 7.26ms
      ➜  nvim-web-devicons/plugin/nvim-web-devicons.vim 0.17ms
    ●  User AstroGitFile 3ms
      ➜  gitsigns.nvim 2.92ms
