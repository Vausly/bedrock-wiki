import{_ as p,e as d,t as e,C as a,f as s,Q as t,E as i,D as l,d as o}from"./chunks/framework.CuLWBCQE.js";const c="/assets/images/loot/trade_tables/trading.png",is=JSON.parse('{"title":"Trade Tables","description":"Trade tables represent the fundamental data behind trading item transactions for an entity.","frontmatter":{"title":"Trade Tables","category":"Documentation","nav_order":2,"mentions":["Ciosciaa","SirLich","TheItsNameless","QuazChick"],"description":"Trade tables represent the fundamental data behind trading item transactions for an entity."},"headers":[{"level":2,"title":"Integration","slug":"integration","link":"#integration","children":[]},{"level":2,"title":"Structure","slug":"structure","link":"#structure","children":[{"level":3,"title":"Tiers","slug":"tiers","link":"#tiers","children":[{"level":4,"title":"Experience Requirement","slug":"experience-requirement","link":"#experience-requirement","children":[]},{"level":4,"title":"Tier Unlocking","slug":"tier-unlocking","link":"#tier-unlocking","children":[{"level":5,"title":"Initial Tier Experience","slug":"initial-tier-experience","link":"#initial-tier-experience","children":[]},{"level":5,"title":"Tier Freezing","slug":"tier-freezing","link":"#tier-freezing","children":[]}]}]},{"level":3,"title":"Trade Groups","slug":"trade-groups","link":"#trade-groups","children":[]},{"level":3,"title":"Trades","slug":"trades","link":"#trades","children":[{"level":4,"title":"Wanted and Given Items","slug":"wanted-and-given-items","link":"#wanted-and-given-items","children":[]},{"level":4,"title":"Trade Limit","slug":"trade-limit","link":"#trade-limit","children":[]},{"level":4,"title":"Player Experience","slug":"player-experience","link":"#player-experience","children":[]},{"level":4,"title":"Trader Experience","slug":"trader-experience","link":"#trader-experience","children":[]}]},{"level":3,"title":"Choices","slug":"choices","link":"#choices","children":[]},{"level":3,"title":"Items","slug":"items","link":"#items","children":[{"level":4,"title":"Item Reference","slug":"item-reference","link":"#item-reference","children":[]},{"level":4,"title":"Quantity","slug":"quantity","link":"#quantity","children":[]},{"level":4,"title":"Price Multiplier","slug":"price-multiplier","link":"#price-multiplier","children":[{"level":5,"title":"Fluctuation Factors","slug":"fluctuation-factors","link":"#fluctuation-factors","children":[]},{"level":5,"title":"Cost Calculations","slug":"cost-calculations","link":"#cost-calculations","children":[]}]},{"level":4,"title":"Functions","slug":"functions","link":"#functions","children":[{"level":5,"title":"Generally Unusable Functions","slug":"generally-unusable-functions","link":"#generally-unusable-functions","children":[]},{"level":5,"title":"Unusable Wanted Item Functions","slug":"unusable-wanted-item-functions","link":"#unusable-wanted-item-functions","children":[]},{"level":5,"title":"Quantity-Modifying Enchantment Functions","slug":"quantity-modifying-enchantment-functions","link":"#quantity-modifying-enchantment-functions","children":[{"level":6,"title":"Enchant with Levels Function","slug":"enchant-with-levels-function","link":"#enchant-with-levels-function","children":[]},{"level":6,"title":"Enchant Book for Trading Function","slug":"enchant-book-for-trading-function","link":"#enchant-book-for-trading-function","children":[]}]},{"level":5,"title":"Spawn Egg Trader Binding","slug":"spawn-egg-trader-binding","link":"#spawn-egg-trader-binding","children":[]}]}]}]},{"level":2,"title":"Overrides","slug":"overrides","link":"#overrides","children":[]}],"relativePath":"loot/trade-tables.md","filePath":"loot/trade-tables.md"}'),k={name:"loot/trade-tables.md"},u=t("",6),E=s("p",null,"The following example is referenced and analyzed throughout the document:",-1),b=s("div",{class:"language-json vp-adaptive-theme line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"json"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "tiers"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": [")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'            "groups"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": [")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                    "num_to_select"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                    "trades"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": [")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                        {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                            "wants"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": [")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                                {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                                    "item"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"wiki:blessing_glyph"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                                    "quantity"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                                        "min"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"2"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                                        "max"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"4")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                                    },")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                                    "price_multiplier"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0.5")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                                },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                                {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                                    "item"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"minecraft:book"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                                }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                            ],")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                            "gives"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": [")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                                {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                                    "item"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"minecraft:enchanted_book"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                                    "functions"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": [")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                                        {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                                            "function"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"enchant_book_for_trading"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                                            "base_cost"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"4"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                                            "base_random_cost"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"12"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                                            "per_level_cost"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"4"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                                            "per_level_random_cost"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"8")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                                        }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                                    ]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                                }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                            ],")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                            "max_uses"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"7"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                            "trader_exp"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"3")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                        },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                        {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                            "wants"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": [")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                                {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                                    "item"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"wiki:crystalline_spiritite"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                                    "quantity"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"32"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                                    "price_multiplier"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0.125")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                                }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                            ],")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                            "gives"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": [")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                                {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                                    "item"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"wiki:exalted_blade"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                                    "functions"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": [")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                                        {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                                            "function"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"enchant_with_levels"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                                            "treasure"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                                            "levels"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                                                "min"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"15"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                                                "max"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"25")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                                            }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                                        }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                                    ]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                                }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                            ],")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                            "max_uses"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"2"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                            "reward_exp"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"false"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                            "trader_exp"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"8")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                        }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                    ]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            ]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'            "total_exp_required"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"28"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'            "trades"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": [")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                    "wants"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": [")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                        {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                            "choice"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": [")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                                {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                                    "item"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"wiki:sacred_stones"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                                    "quantity"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                                        "min"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"4"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                                        "max"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"6")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                                    },")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                                    "price_multiplier"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0.5")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                                },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                                {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                                    "item"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"wiki:blessed_beads"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                                    "quantity"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                                        "min"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"16"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                                        "max"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"24")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                                    },")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                                    "price_multiplier"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0.5")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                                }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                            ]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                        }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                    ],")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                    "gives"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": [")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                        {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                            "item"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"wiki:aeleon_jewels"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                            "quantity"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                                "min"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"4"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                                "max"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"6")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                            }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                        }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                    ],")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                    "max_uses"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"2")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            ]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br"),s("span",{class:"line-number"},"13"),s("br"),s("span",{class:"line-number"},"14"),s("br"),s("span",{class:"line-number"},"15"),s("br"),s("span",{class:"line-number"},"16"),s("br"),s("span",{class:"line-number"},"17"),s("br"),s("span",{class:"line-number"},"18"),s("br"),s("span",{class:"line-number"},"19"),s("br"),s("span",{class:"line-number"},"20"),s("br"),s("span",{class:"line-number"},"21"),s("br"),s("span",{class:"line-number"},"22"),s("br"),s("span",{class:"line-number"},"23"),s("br"),s("span",{class:"line-number"},"24"),s("br"),s("span",{class:"line-number"},"25"),s("br"),s("span",{class:"line-number"},"26"),s("br"),s("span",{class:"line-number"},"27"),s("br"),s("span",{class:"line-number"},"28"),s("br"),s("span",{class:"line-number"},"29"),s("br"),s("span",{class:"line-number"},"30"),s("br"),s("span",{class:"line-number"},"31"),s("br"),s("span",{class:"line-number"},"32"),s("br"),s("span",{class:"line-number"},"33"),s("br"),s("span",{class:"line-number"},"34"),s("br"),s("span",{class:"line-number"},"35"),s("br"),s("span",{class:"line-number"},"36"),s("br"),s("span",{class:"line-number"},"37"),s("br"),s("span",{class:"line-number"},"38"),s("br"),s("span",{class:"line-number"},"39"),s("br"),s("span",{class:"line-number"},"40"),s("br"),s("span",{class:"line-number"},"41"),s("br"),s("span",{class:"line-number"},"42"),s("br"),s("span",{class:"line-number"},"43"),s("br"),s("span",{class:"line-number"},"44"),s("br"),s("span",{class:"line-number"},"45"),s("br"),s("span",{class:"line-number"},"46"),s("br"),s("span",{class:"line-number"},"47"),s("br"),s("span",{class:"line-number"},"48"),s("br"),s("span",{class:"line-number"},"49"),s("br"),s("span",{class:"line-number"},"50"),s("br"),s("span",{class:"line-number"},"51"),s("br"),s("span",{class:"line-number"},"52"),s("br"),s("span",{class:"line-number"},"53"),s("br"),s("span",{class:"line-number"},"54"),s("br"),s("span",{class:"line-number"},"55"),s("br"),s("span",{class:"line-number"},"56"),s("br"),s("span",{class:"line-number"},"57"),s("br"),s("span",{class:"line-number"},"58"),s("br"),s("span",{class:"line-number"},"59"),s("br"),s("span",{class:"line-number"},"60"),s("br"),s("span",{class:"line-number"},"61"),s("br"),s("span",{class:"line-number"},"62"),s("br"),s("span",{class:"line-number"},"63"),s("br"),s("span",{class:"line-number"},"64"),s("br"),s("span",{class:"line-number"},"65"),s("br"),s("span",{class:"line-number"},"66"),s("br"),s("span",{class:"line-number"},"67"),s("br"),s("span",{class:"line-number"},"68"),s("br"),s("span",{class:"line-number"},"69"),s("br"),s("span",{class:"line-number"},"70"),s("br"),s("span",{class:"line-number"},"71"),s("br"),s("span",{class:"line-number"},"72"),s("br"),s("span",{class:"line-number"},"73"),s("br"),s("span",{class:"line-number"},"74"),s("br"),s("span",{class:"line-number"},"75"),s("br"),s("span",{class:"line-number"},"76"),s("br"),s("span",{class:"line-number"},"77"),s("br"),s("span",{class:"line-number"},"78"),s("br"),s("span",{class:"line-number"},"79"),s("br"),s("span",{class:"line-number"},"80"),s("br"),s("span",{class:"line-number"},"81"),s("br"),s("span",{class:"line-number"},"82"),s("br"),s("span",{class:"line-number"},"83"),s("br"),s("span",{class:"line-number"},"84"),s("br"),s("span",{class:"line-number"},"85"),s("br"),s("span",{class:"line-number"},"86"),s("br"),s("span",{class:"line-number"},"87"),s("br"),s("span",{class:"line-number"},"88"),s("br"),s("span",{class:"line-number"},"89"),s("br"),s("span",{class:"line-number"},"90"),s("br"),s("span",{class:"line-number"},"91"),s("br"),s("span",{class:"line-number"},"92"),s("br"),s("span",{class:"line-number"},"93"),s("br"),s("span",{class:"line-number"},"94"),s("br"),s("span",{class:"line-number"},"95"),s("br"),s("span",{class:"line-number"},"96"),s("br"),s("span",{class:"line-number"},"97"),s("br"),s("span",{class:"line-number"},"98"),s("br"),s("span",{class:"line-number"},"99"),s("br"),s("span",{class:"line-number"},"100"),s("br"),s("span",{class:"line-number"},"101"),s("br"),s("span",{class:"line-number"},"102"),s("br"),s("span",{class:"line-number"},"103"),s("br"),s("span",{class:"line-number"},"104"),s("br"),s("span",{class:"line-number"},"105"),s("br"),s("span",{class:"line-number"},"106"),s("br"),s("span",{class:"line-number"},"107"),s("br"),s("span",{class:"line-number"},"108"),s("br"),s("span",{class:"line-number"},"109"),s("br"),s("span",{class:"line-number"},"110"),s("br"),s("span",{class:"line-number"},"111"),s("br"),s("span",{class:"line-number"},"112"),s("br"),s("span",{class:"line-number"},"113"),s("br"),s("span",{class:"line-number"},"114"),s("br"),s("span",{class:"line-number"},"115"),s("br"),s("span",{class:"line-number"},"116"),s("br"),s("span",{class:"line-number"},"117"),s("br"),s("span",{class:"line-number"},"118"),s("br"),s("span",{class:"line-number"},"119"),s("br"),s("span",{class:"line-number"},"120"),s("br")])],-1),g=s("h2",{id:"structure",tabindex:"-1"},[i("Structure "),s("a",{class:"header-anchor",href:"#structure","aria-label":'Permalink to "Structure"'},"​")],-1),m=s("p",null,"Trade tables are represented as un-versioned, un-namespaced objects.",-1),y=t("",4),_=t("",1),f=t("",6),C=t("",10),F=t("",4),v=t("",6),q=t("",5),T=t("",6),B=t("",6),w=t("",4),x=t("",5),P=t("",6),I=t("",1),A=t("",3),S=t("",2),j=t("",5),V=t("",5),D=t("",17),N=t("",15),R=t("",4),O=t("",8),z={class:"tip custom-block"},W=s("p",{class:"custom-block-title"},"TIP",-1),G=s("p",null,[i("If the total combined cost would be negative (assuming no negative random cost properties were used), the provided "),s("a",{href:"#quantity"},"quantity"),i(" of the affected wanted item is used instead. The simplest means of guaranteeing this would be:")],-1),Q=t("",1),L=s("h5",{id:"spawn-egg-trader-binding",tabindex:"-1"},[i("Spawn Egg Trader Binding "),s("a",{class:"header-anchor",href:"#spawn-egg-trader-binding","aria-label":'Permalink to "Spawn Egg Trader Binding"'},"​")],-1),U=s("p",null,[i("The "),s("code",null,'"set_actor_id"'),i(" function is used to set the data value of a spawn egg based on a provided entity identifier, given with "),s("code",null,'"id"'),i(".")],-1),H=t("",8);function M(X,$,J,Y,K,Z){const r=l("FolderView"),n=l("CodeHeader"),h=l("Spoiler");return o(),d("div",null,[u,e(r,{paths:["BP/trading/minister.json","BP/trading/economy_trades/cleric_trades.json"]}),E,e(h,{title:"Trade Table File Example"},{default:a(()=>[e(n,null,{default:a(()=>[i("BP/trading/minister.json")]),_:1}),b]),_:1}),g,m,e(n,null,{default:a(()=>[i("#")]),_:1}),y,e(n,null,{default:a(()=>[i("#/tiers/0")]),_:1}),_,e(n,null,{default:a(()=>[i("#/tiers/1")]),_:1}),f,e(n,null,{default:a(()=>[i("#/tiers/1/")]),_:1}),C,e(n,null,{default:a(()=>[i("Example Tier Freeze")]),_:1}),F,e(n,null,{default:a(()=>[i("#/tiers/0/groups/0")]),_:1}),v,e(n,null,{default:a(()=>[i("#/tiers/0/trades/1")]),_:1}),q,e(n,null,{default:a(()=>[i("#/tiers/0/trades/1/")]),_:1}),T,e(n,null,{default:a(()=>[i("#/tiers/0/trades/1/")]),_:1}),B,e(n,null,{default:a(()=>[i("#/tiers/0/trades/1/")]),_:1}),w,e(n,null,{default:a(()=>[i("#/tiers/0/trades/1/")]),_:1}),x,e(n,null,{default:a(()=>[i("#/tiers/1/trades/0/wants/0")]),_:1}),P,e(n,null,{default:a(()=>[i("#/tiers/1/trades/0/wants/0/choice/0")]),_:1}),I,e(n,null,{default:a(()=>[i("#/tiers/0/groups/0/trades/1/gives/0")]),_:1}),A,e(n,null,{default:a(()=>[i("#/tiers/1/trades/0/wants/0/choice/0/")]),_:1}),S,e(n,null,{default:a(()=>[i("Example Data Assignment")]),_:1}),j,e(n,null,{default:a(()=>[i("#/tiers/1/trades/0/wants/0/choice/0/")]),_:1}),V,e(n,null,{default:a(()=>[i("#/tiers/1/trades/0/wants/0/choice/0/")]),_:1}),D,e(n,null,{default:a(()=>[i("#/tiers/0/groups/0/trades/1/gives/0/")]),_:1}),N,e(n,null,{default:a(()=>[i("#/tiers/0/groups/0/trades/1/gives/0/functions/0")]),_:1}),R,e(n,null,{default:a(()=>[i("#/tiers/0/groups/0/trades/0/gives/0/functions/0")]),_:1}),O,s("div",z,[W,G,e(n,null,{default:a(()=>[i("Example Quantity-Based Enchanted Book Cost")]),_:1}),Q]),L,U,e(n,null,{default:a(()=>[i("Example Spawn Egg Trader Binding")]),_:1}),H])}const es=p(k,[["render",M]]);export{is as __pageData,es as default};
