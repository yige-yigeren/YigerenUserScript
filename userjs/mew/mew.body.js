import {
    MewTool,
    MewPlugin,
    mew
} from "./mew.frame.js"; //https://fastly.jsdelivr.net/gh/yige233/bettermew@b36ba4c/mew.frame.js
let resources = {
    icon_totop: 'https://fastly.jsdelivr.net/gh/yige233/bettermew@4cbcef5/icon/totop.svg',
    icon_search: 'https://fastly.jsdelivr.net/gh/yige233/bettermew@4cbcef5/icon/search.svg',
    css_topic_list: "https://fastly.jsdelivr.net/gh/yige233/bettermew@e1c937b/css/topic_list.css",
    css_desktop: "https://fastly.jsdelivr.net/gh/yige233/bettermew@ce63961/css/desktop.css",
    css_thought_in_middle: "https://fastly.jsdelivr.net/gh/yige233/bettermew@fbb9442/css/thought_in_middle.css",
    css_whisper_in_middle: "https://fastly.jsdelivr.net/gh/yige233/bettermew@4cbcef5/css/whisper_in_middle.css",
    css_desktop_reverse: "https://fastly.jsdelivr.net/gh/yige233/bettermew@ce63961/css/desktop_reverse.css",
    css_compact_thought_hide_img: "https://fastly.jsdelivr.net/gh/yige233/bettermew@4cbcef5/css/compact_thought_hide_img.css",
    css_compact_thought_hide_text: "https://fastly.jsdelivr.net/gh/yige233/bettermew@4cbcef5/css/compact_thought_hide_text.css",
    css_compact_thought_more_node: "https://fastly.jsdelivr.net/gh/yige233/bettermew@4cbcef5/css/compact_thought_more_node.css",
    css_search: "https://fastly.jsdelivr.net/gh/yige233/bettermew@59659ac/css/search.css",
    css_text2url: "https://fastly.jsdelivr.net/gh/yige233/bettermew@4cbcef5/css/text2url.css",
    css_img_size: "https://fastly.jsdelivr.net/gh/yige233/bettermew@4cbcef5/css/img_size.css",
    css_thought_widget: "https://fastly.jsdelivr.net/gh/yige233/bettermew@c577cfc/css/thought_widget.css",
    css_only_this_mewer: "https://fastly.jsdelivr.net/gh/yige233/bettermew@4cbcef5/css/only_this_mewer.css",
    css_custom_stamp: "https://fastly.jsdelivr.net/gh/yige233/bettermew@c577cfc/css/custom_stamp.css",
    icon_node_manage: "https://fastly.jsdelivr.net/gh/yige233/bettermew@4cbcef5/icon/node_manage.svg",
    css_node_manage: "https://fastly.jsdelivr.net/gh/yige233/bettermew@c577cfc/css/node_manage.css"
};
mew.load(new MewPlugin("desktop", {
    short_desc: "桌面布局更改",
    long_desc: "可以通滑动条分别调整想法栏和主页栏的宽度。",
    func_once: async function () {
        MewTool.loadcss(await MewTool.fetchres(resources.css_desktop));
    },
    func_loop: function () {
        document.body.style.setProperty("--left-width", this.configs.get("left_width").value + "%");
        document.body.style.setProperty("--right-width", this.configs.get("right_width").value + "%");
    }
}).addConf("left_width", {
    type: "number",
    desc: "调整想法栏宽度(%)：",
    default: 26,
    max: 50
}).addConf("right_width", {
    type: "number",
    default: 17,
    desc: "调整主页栏宽度(%)：",
    max: 50
}));
mew.load(new MewPlugin("thought_in_middle", {
    short_desc: "想法全文居中",
    long_desc: "点开想法全文后，想法不再靠边显示而是居中显示。",
    func_once: async function () {
        MewTool.loadcss(await MewTool.fetchres(resources.css_thought_in_middle));
    }
}));
mew.load(new MewPlugin("whisper_in_middle", {
    short_desc: "私聊窗口居中",
    long_desc: "点开私聊窗口后，窗口不再靠边显示而是居中显示。",
    func_once: async function () {
        MewTool.loadcss(await MewTool.fetchres(resources.css_whisper_in_middle));
    }
}));
mew.load(new MewPlugin("desktop_reverse", {
    short_desc: "调换想法栏和主页栏",
    long_desc: "实际上是将整个桌面的排列顺序进行了反转。",
    func_once: async function () {
        MewTool.loadcss(await MewTool.fetchres(resources.css_desktop_reverse));
    },
}));
mew.load(new MewPlugin("img_size", {
    short_desc: "调整想法全文内图片大小",
    long_desc: "可以通过滑动条来调整想法内图片的显示大小。",
    func_once: async function () {
        MewTool.loadcss(await MewTool.fetchres(resources.css_img_size))
    },
    func_loop: function () {
        let width = this.configs.get("img_width").value;
        document.body.style.setProperty("--img-width", width + "%");
        document.body.style.setProperty("--img-left", (100 - width) / 2 + "%");
    }
}).addConf("img_width", {
    type: "number",
    default: 50,
    desc: "调整想法全文内图片大小(%)：",
    max: 100
}));
mew.load(new MewPlugin("compact_thought_hide_img", {
    short_desc: "隐藏图片",
    long_desc: "隐藏左侧想法栏图片。",
    func_once: async function () {
        MewTool.loadcss(await MewTool.fetchres(resources.css_compact_thought_hide_img));
    }
}));
mew.load(new MewPlugin("compact_thought_hide_text", {
    short_desc: "缩减文字",
    long_desc: "缩减左侧想法栏文字高度。",
    func_once: async function () {
        MewTool.loadcss(await MewTool.fetchres(resources.css_compact_thought_hide_text));
    }
}));
mew.load(new MewPlugin("compact_thought_more_node", {
    short_desc: "更多据点",
    long_desc: "左侧据点栏可显示四个据点。",
    func_once: async function () {
        MewTool.loadcss(await MewTool.fetchres(resources.css_compact_thought_more_node));
    }
}));
mew.load(new MewPlugin("topic_list", {
    short_desc: "更好的话题栏",
    long_desc: "鼠标置于话题栏上时，将会展开所有话题Tag，移出则收起。",
    func_once: async function () {
        MewTool.loadcss(await MewTool.fetchres(resources.css_topic_list));
    },
}));
mew.load(new MewPlugin("thought_widget", {
    short_desc: "回到顶部",
    long_desc: "在想法全文内增加一个“回到顶部”按钮。",
    func_once: async function () {
        MewTool.loadcss(await MewTool.fetchres(resources.css_thought_widget));
    },
    func_loop: function () {
        if (!document.querySelector("#comments")) return false;
        var root = document.querySelectorAll("#comments");
        if (root[root.length - 1].querySelector(".thought-widget")) return false;
        let div = MewTool.dom(`<div class="thought-widget"><div title="回到顶部" class="to-top" style="height: 40px;width: 40px;cursor: pointer;background: url('${resources.icon_totop}') center center no-repeat;"></div></div>`);
        div.addEventListener("click", (e) => {
            e.target.parentNode.parentNode.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
        root[root.length - 1].append(div);
    }
}));
mew.load(new MewPlugin("only_this_mewer", {
    short_desc: "“只看Ta”",
    long_desc: "点击想法长文内的“只看作者”按钮，会弹出一个提示框；提示框内输入用户昵称，即可查看该用户在本想法的发言。同时该功能会隐藏被删除的评论。",
    func_once: async function () {
        MewTool.loadcss(await MewTool.fetchres(resources.css_only_this_mewer));
        let lib = document.createElement("script"),
            hook = async (response) => {
                if (response.config.url.indexOf("authorOnly=1") == -1) return false;
                let url = response.config.url.replace("&authorOnly=1", "");
                response.response = await fetch(url).then(res => res.json()).then(res => {
                    let res_filted = ((obj, name) => {
                        const res = {
                            entries: [],
                            objects: {}
                        };
                        if (obj.entries.length == 0) {
                            for (let x = 0; x < 1; x++) res.entries.push({
                                id: 0
                            })
                        } else {
                            for (let x = 0; x < 20; x++) res.entries.push({
                                id: obj.entries[obj.entries.length - 1].id,
                                deleted: true
                            });
                        };
                        Object.assign(res.objects, obj.objects);
                        var s = new Set(obj.entries);
                        s.forEach((i) => {
                            if (i.author_id && obj.objects.users[i.author_id].name == name) {
                                res.entries.push(i);
                                res.entries.shift();
                            };
                        });
                        return res;
                    })(res, this.configs.get("only_this_mewer").value);
                    return JSON.stringify(res_filted);
                });
                return response;
            };
        lib.src = "https://unpkg.com/ajax-hook@2.0.3/dist/ajaxhook.min.js";
        lib.onload = () => {
            ah.proxy({
                onRequest: (config, handler) => {
                    handler.next(config);
                },
                onError: (err, handler) => {
                    handler.next(err);
                },
                onResponse: async (response, handler) => {
                    let res = await hook(response);
                    if (res) response = res;
                    handler.next(response);
                },
            });
        };
        document.head.append(lib);
    },
    func_loop: function () {
        if (!document.querySelector("#comments")) return false;
        var root = document.querySelectorAll("#comments");
        if (root[root.length - 1].querySelector(".onlyauthor-hook")) return false;
        let btn = root[root.length - 1].querySelectorAll("[class^='comments_right-btn__']")[0];
        btn.addEventListener("click", (e) => {
            if (e.target.innerText == "只看作者") {
                var nick = prompt("打算只看谁的评论呢？填入Ta的昵称：", e.target.getAttribute("data-author"));
                if (!nick) return e.stopPropagation();
                this.configs.set("only_this_mewer", nick);
            };
        });
        btn.setAttribute("data-author", root[root.length - 1].querySelector("[class^='thought_name__']").innerText);
        btn.classList.add("onlyauthor-hook");
    }
}).addConf("only_this_mewer", {}));
mew.load(new MewPlugin("search", {
    id: "search",
    short_desc: "PC端想法搜索",
    long_desc: "左侧据点列表上方新增一个搜索按钮，点击后可搜索据点内想法。",
    func_loop: function () {
        if (document.querySelector("#icon_search") || !document.querySelector("[class^='sidebar_logo__']")) return false;
        var icon_search = MewTool.dom(`<div id="icon_search" style="background-image:url(${resources.icon_search});width:40px;height:40px;background-repeat: round;"></div>`);
        icon_search.addEventListener("click", () => {
            this.func_once_result.render();
        });
        document.querySelector("[class^='sidebar_logo__']").after(icon_search);
    },
    func_once: async function () {
        MewTool.loadcss(await MewTool.fetchres(resources.css_search));
        document.addEventListener("keydown", (e) => {
            if (e.key == "Enter" && document.querySelector(".search_btn")) document.querySelector(".search_btn").click();
        });
        return new class {
            rendcard(options) {
                let option = {
                    avatar: (options.avatar) ? options.avatar + "~tplv-c226mjqywu-size:96.image" : "/_next/static/images/default-avatar-1-d21d3e0c70ccc333b797212fed6be0c9.png",
                    nick: options.nick || "Result Card",
                    content: options.content || "该想法没有文字OwO 但您仍可点击这段文字了解该想法的详情",
                    date: (options.date) ? "发表于：" + new Date(options.date).toLocaleString("chinese", {
                        hour12: false
                    }) : new Date().toLocaleString("chinese", {
                        hour12: false
                    }),
                    data_id: options.data_id || "",
                };
                let card = MewTool.dom(`
                <div class="searchitem">
                    <div class="poster">
                        <img src="${option.avatar}">
                        <div>
                            <span class="nickname">${option.nick}</span>
                            <span class="date">${option.date}</span>
                        </div>
                        ${(option.data_id) ? `<div class="shareto">分享想法至讨论</div>` : ""}
                    </div>
                    <p class="content">${option.content}</p>
                </div>`);
                card.querySelector(".content").addEventListener("click", () => {
                    if (option.data_id) window.open("https://mew.fun/betterMew/thoughts/" + option.data_id);
                });
                option.data_id && card.querySelector(".shareto").addEventListener("click", () => {
                    this.sharepage(option.data_id);
                });
                return card;
            };
            async sharepage(thought_id) {
                let json = await fetch(`https://api.mew.fun/api/v1/users/@me/mynodes`, {
                    headers: {
                        Authorization: localStorage.getItem("mew-token").replace(/"/g, "")
                    }
                }).then(res => res.json());
                if (json.message) return mew.noticece("获取您的据点列表失败！", json.message);
                let page = MewTool.stdpage(`<div class="sharepage_root"><ul></ul></div>`);
                let ul = page.querySelector(".sharepage_root").querySelector("ul");
                for (let n of json.entries) {
                    for (let t of n.topics) {
                        let li = MewTool.dom(`<li>分享至：${n.name} 的 ${t.name}</li>`);
                        li.addEventListener("click", () => {
                            fetch(`https://api.mew.fun/api/v1/topics/${t.id}/messages`, {
                                headers: {
                                    Authorization: localStorage.getItem("mew-token").replace(/"/g, ""),
                                    "Content-type": "application/json; charset=utf-8"
                                },
                                body: JSON.stringify({
                                    type: 2,
                                    thought: thought_id
                                }),
                                method: "POST"
                            }).then(async res => {
                                if (res.ok) return mew.notice("分享成功！", "分享成功！", () => {
                                    window.open(`https://mew.fun/n/${n.node_name}?topicId=${t.id}`);
                                });
                                let json = res.json();
                                return mew.notice("分享失败！", json.message);
                            })
                        });
                        ul.append(li);
                    };
                };
                page.apply();
            }
            async getsearchres(keyword, pagination) {
                let base_url = `https://api.mew.fun/api/v1/nodes/${window.location.pathname.slice(3)}/search-thoughts?keyword=${keyword}&limit=100`;
                let url = (pagination) ? `${base_url}&pagination=${pagination}` : base_url;
                let res = await fetch(url, {
                    headers: {
                        Authorization: localStorage.getItem("mew-token").replace(/"/g, "")
                    }
                });
                return await res.json();
            };
            async search(keyword, pagination) {
                let container = document.querySelector("#searchres");
                let searching = this.rendcard({
                    nick: "提示",
                    content: "正在努力搜索中！"
                });
                container.append(searching);
                let res = await this.getsearchres(keyword, pagination || null);
                searching.remove();
                if (res.message) container.append(this.rendcard({
                    nick: "提示",
                    content: res.message
                }));
                if (res.entries.length == 0) return container.append(this.rendcard({
                    nick: "提示",
                    content: "没有搜索到任何信息！"
                }));
                for (let e of res.entries) {
                    let poster = res.objects.users[e.author_id],
                        avatar = (poster.avatar) ? res.objects.media[poster.avatar].url : null;
                    container.append(this.rendcard({
                        avatar: avatar,
                        nick: poster.name,
                        content: e.status,
                        date: e.created_at,
                        data_id: e.id
                    }));
                };
                if (res.entries.length == 100) {
                    let next = this.rendcard({
                        nick: "提示",
                        content: "点击我加载更多结果(ง •_•)ง"
                    });
                    next.addEventListener("click", async () => {
                        await this.search(keyword, res.pagination);
                        next.remove();
                    });
                    container.append(next);
                };
            };
            render() {
                let s = MewTool.stdpage(`<div class="form"><input class="search_input" type="text" placeholder="请输入您要搜索的内容..." ><button class="search_btn"></button></div><div><span>倒序浏览</span><input id="sort" class="sort switcher" type="checkbox"><label for="sort"></label></div><div id="searchres"></div>`);
                s.querySelector("button").addEventListener("click", () => {
                    let container = document.querySelector("#searchres");
                    container.innerHTML = "";
                    this.search(document.querySelector(".search_input").value);
                });
                s.querySelector(".sort").addEventListener("change", (e) => {
                    if (e.target.checked) document.querySelector("#searchres").style = "flex-direction: column-reverse"
                    else document.querySelector("#searchres").style = ""
                });
                s.apply();
            };
        };
    }
}));
let plugin_custom_stamps = new MewPlugin("custom_stamp", {
    short_desc: "自定义表情",
    long_desc: "可在“发送表情”按钮中使用自定义表情。在表情管理页中管理自定义表情。",
    func_loop: async function () {
        let nonce_gen = (len) => {
            let nonce = [];
            for (let i = 0; i < len; i++) {
                nonce.push(Math.floor(Math.random() * 10))
            };
            return nonce.join("");
        };
        let stamps = this.configs.get("stamps").value;
        if (!document.querySelector("[class^='reaction-panel_stamp-list__']") || document.querySelector(".custom_stamps")) return false;
        document.querySelector("[class^='reaction-panel_stamp-list__']").classList.add("custom_stamps");
        let topicid = (document.querySelector("[class*='panel_list__']")) ?
            document.querySelector("[class*='panel_list__']").querySelector("[class*='sidebar_selected__']").parentNode.getAttribute("data-id") : MewTool.getreact(document.querySelector("div[class*='message-container_widget__']")).children[0].props.children.props.topicId || 0
        if (topicid == 0) return false;
        for (let s of stamps) {
            let [id, hash, desc] = s.split("$"),
                the_desc = desc || "木有说明(っ °Д °;)っ",
                mystamp = MewTool.dom(`
                <button class="reaction-panel_stamp__8qpSD" title="${the_desc}">
                    <picture class="reaction-panel_image__2FjNq">
                        <source srcset="https://image.mew.fun/${hash}~tplv-c226mjqywu-size:96.image" type="image/png">
                        <img src="https://image.mew.fun/${hash}~tplv-c226mjqywu-size:96.image" alt="${the_desc}">
                    </picture>
                </button>`),
                send = (e) => {
                    fetch(`https://api.mew.fun/api/v1/topics/${topicid}/messages`, {
                        headers: {
                            Authorization: localStorage.getItem("mew-token").replace(/"/g, ""),
                            "Content-type": "application/json",
                        },
                        body: JSON.stringify({
                            nonce: nonce_gen(18),
                            media: [id]
                        }),
                        method: "POST",
                    });
                };
            mystamp.addEventListener("click", send);
            mystamp.addEventListener('contextmenu', e => {
                e.preventDefault();
                MewTool.contextmenu(e, new Map([
                    ["发送", send],
                    ["查看完整图片", (e) => {
                        if (document.querySelector("#preview_stamp")) {
                            document.querySelector("#preview_stamp").src = `https://image.mew.fun/${hash}`;
                            return document.querySelector("#preview_stamp").setAttribute("disapper-count", 5);
                        };
                        let preview = MewTool.stdpage(`<div style="margin:20% auto;"><img id="preview_stamp" src="https://image.mew.fun/${hash}" disapper-count="5"/></div>`);
                        let timer_el = preview.querySelector("#preview_stamp");
                        preview.apply();
                        let timer = setInterval(() => {
                            let left_time = Number(timer_el.getAttribute("disapper-count"));
                            if (left_time == 0) {
                                preview.remove();
                                clearInterval(timer);
                            } else timer_el.setAttribute("disapper-count", left_time - 1);
                        }, 1000);
                    }]
                ]));
            });
            document.querySelector(".custom_stamps").append(mystamp);
        };
    },
    func_once: async function () {
        MewTool.loadcss(await MewTool.fetchres(resources.css_custom_stamp));
        return class {
            flag_delete = false;
            constructor(self) {
                this.configs = self.configs;
                this.page = MewTool.stdpage(`<div class="title">在此处管理你的自定义表情：单击图片或图标激活菜单。更改将会自动保存。</div><ul class="stamp_manage" ></ul>`);
                let ul = this.page.querySelector("ul");
                let add = MewTool.dom(`<button class="reaction-panel_stamp__8qpSD add_stamp_card"><img src="https://image.mew.fun/57cd627312954aa7a9d98fa4b1d91148~tplv-c226mjqywu-size:96.image" /></button>`)
                add.addEventListener("click", (e) => {
                    MewTool.contextmenu(e, new Map([
                        ["添加表情", async () => {
                            let url = prompt("填入想存为表情的Mew图片链接：");
                            if (!url) return false;
                            let [id, hash] = await MewTool.imgurl2id(url);
                            if (!id) return mew.notice("提示", "不正确的图片链接！");
                            let desc = prompt("添加关于该图片的说明：");
                            desc = desc || "";
                            let stamp = `${id}$${hash}$${desc}`;
                            this.page.querySelector(".add_stamp_card").before(this.rend_stamp_card(stamp));
                            this.save();
                        }],
                        ["从url批量导入表情", async (e) => {
                            let url = prompt("填入含有表情代码的链接：");
                            if (!url) return false;
                            await MewTool.fetchres(url).then(text => this.add_batch(text));
                        }],
                        ["批量导入本地表情", (e) => {
                            let input = MewTool.dom(`<input type="file" style="display:none" accept=".txt" \\>`);
                            input.addEventListener("change", (e) => {
                                let reader = new FileReader(); //读入文件
                                reader.onload = () => {
                                    this.add_batch(reader.result);
                                };
                                reader.readAsText(input.files[0]);
                                input.remove();
                            });
                            document.body.append(input);
                            input.click();
                        }],
                        ["导出表情", (e) => {
                            let fname = prompt("欲导出的文件名：", "我的Mew表情");
                            if (!fname) return false;
                            let a = document.createElement('a');
                            a.download = `${fname || "我的Mew表情"}.txt`;
                            let blob = new Blob([this.configs.get("stamps").value.join("\n")]);
                            a.href = URL.createObjectURL(blob);
                            a.click();
                            a = null;
                        }],
                        ["快速删除表情", (e) => {
                            if (!this.flag_delete) {
                                this.flag_delete = true;
                                mew.notice("提示", "已进入快速删除模式，单击表情图标来删除它。再次选择此选项离开快速删除模式。")
                                return this.flag_delete;
                            };
                            this.flag_delete = false;
                            mew.notice("提示", "已离开快速删除表情模式。")
                        }],
                        ["删除所有表情", (e) => {
                            this.configs.set("stamps");
                            let stamps = this.page.querySelectorAll(".stamp_card");
                            for (let e of stamps) e.remove();
                            mew.notice("提示", "已删除全部表情");
                        }]
                    ]));
                });
                let list = this.configs.get("stamps").value;
                for (let i in list) ul.append(this.rend_stamp_card(list[i]));
                ul.append(add);
            };
            rend_stamp_card(stamp) {
                let [id, hash, desc] = stamp.split("$");
                let card = MewTool.dom(`<button class="reaction-panel_stamp__8qpSD stamp_card" data="${stamp}" title="${desc || "木有说明(っ °Д °;)っ"}"><img src="https://image.mew.fun/${hash}~tplv-c226mjqywu-size:96.image" /></button>`);
                card.addEventListener("click", (e) => {
                    e.preventDefault();
                    MewTool.contextmenu(e, new Map([
                        ["置顶", (e) => {
                            this.page.querySelector(".stamp_manage").prepend(card);
                            this.save();
                        }],
                        ["上移", (e) => {
                            card.previousElementSibling && card.previousElementSibling.before(card);
                            this.save();
                        }],
                        ["下移", (e) => {
                            card.nextElementSibling && card.nextElementSibling.after(card);
                            this.save();
                        }],
                        ["编辑表情说明", (e) => {
                            let new_desc = prompt("添加关于该图片的说明：", desc);
                            if (!new_desc) return false;
                            card.setAttribute("data", `${id}$${hash}$${new_desc}`);
                            card.title = new_desc;
                            this.save();
                        }],
                        ["新标签页中打开图片", (e) => {
                            window.open(`https://image.mew.fun/${hash}`);
                        }],
                        ["删除", (e) => {
                            card.remove();
                            this.save();
                        }]
                    ]));
                });
                card.addEventListener("click", (e) => {
                    if (!this.flag_delete) return false;
                    card.remove();
                    this.save();
                })
                return card;
            };
            save() {
                let e_stamps = this.page.querySelectorAll(".stamp_card");
                let stamps = [];
                for (let e of e_stamps) stamps.push(e.getAttribute("data"));
                this.configs.set("stamps", stamps);
            };
            add_batch(stamps_text) {
                let arr = stamps_text.split(/\n|\r|\r\n/).filter(i => i);
                for (let i of arr) {
                    if (i.slice(0, 1) == "#") continue;
                    let [id, hash, desc] = i.split("$");
                    if (!/[0-9]{17,18}/.test(id)) continue;
                    let stamp = `${id}$${hash}$${desc || ""}`;
                    this.page.querySelector(".add_stamp_card").before(this.rend_stamp_card(stamp));
                    this.save();
                };
            }
        };
    }
}).addConf("stamps", {
    type: "button",
    desc: "打开表情管理页",
    default: [],
    click: function () {
        new this.func_once_result(this).page.apply();
    }
});
mew.load(plugin_custom_stamps);
mew.load(new MewPlugin("node_manage", {
    short_desc: "PC端据点管理",
    long_desc: "允许据点管理员在PC端管理据点。非管理员无法保存设置。",
    func_once: async function () {
        MewTool.loadcss(await MewTool.fetchres(resources.css_node_manage));
        return new class {
            header = {
                Authorization: localStorage.getItem("mew-token").replace(/"/g, ""),
                "Content-type": "application/json; charset=utf-8"
            };
            api = "https://api.mew.fun/api/v1";
            constructor(templates) {
                this.templates = templates;
            };
            async fetchdata(url, options) {
                let option = {
                    alert: (options.alert == false) ? false : true,
                    method: options.method || "PATCH",
                    data: options.data || {},
                    onsuccess: options.onsuccess || "据点信息保存成功！",
                    onfail: options.onfail || "据点信息保存失败！",
                };
                for (let k in option.data) {
                    if (option.data[k] === null) delete option.data[k];
                };
                let body = JSON.stringify(option.data);
                let fetch_option = {
                    headers: this.header,
                    method: option.method,
                    body: body
                };
                if (option.method == "GET") delete fetch_option.body;
                return new Promise(async (resolve, reject) => {
                    if (body.length == 2 && !["DELETE", "GET", "PUT", "PATCH"].includes(option.method)) return reject({
                        message: "没有改动任何数据！"
                    });
                    let result = await fetch(url, fetch_option);
                    let json = (result.status == 204) ? {
                        message: "204 No Content"
                    } : await result.json();
                    if (result.ok) {
                        if (option.alert) mew.notice(option.onsuccess, option.onsuccess);
                        return resolve(json);
                    };
                    if (option.alert) mew.notice(option.onfail, json.message);
                    reject(json);
                });
            };
            async load_node_info() {
                this.node_basic = await fetch(`${this.api}/nodes/${window.location.pathname.slice(3)}`, {
                    headers: this.header
                }).then(res => res.json());
                return this.node_basic;
            };
            async page_render() {
                await this.load_node_info();
                this.page = this.load_basic();
                this.load_ic_nodes_switch();
                this.load_member_switch();
                this.load_joinreq_switch();
                this.load_speakreq_switch();
                await this.load_shelf();
                this.page.apply();
            };
            async img(url) {
                let [id, hash] = await MewTool.imgurl2id(url);
                return id || false;
            };
            load_basic() {
                let json = this.node_basic;
                let manage = MewTool.template(this.templates[0], {
                    node_name: json.name,
                    node_super_modrator: json.objects.users[json.super_moderator].username,
                    node_id: json.node_name,
                    node_icon: json.icon || "",
                    searchable: (json.searchable) ? "checked" : "",
                    node_tags: (json.tags.length >= 1) ? json.tags.join("\n") : "",
                    enable_speak_question: (json.enable_speak_question) ? "checked" : "",
                    disable_speak_question: (!json.enable_speak_question) ? "disabled" : "",
                    speak_question: (json.speak_questions.length > 0 && json.enable_speak_question) ? json.speak_questions[0].content : "",
                    enable_join_question: (json.enable_join_question) ? "checked" : "",
                    disable_join_question: (!json.enable_join_question) ? "disabled" : "",
                    join_question: (json.join_questions.length > 0 && json.enable_join_question) ? json.join_questions[0].content : "",
                });
                let s = MewTool.stdpage(manage);
                s.querySelector(`#node_basic`).parentNode.querySelector("button").addEventListener("click", async () => {
                    let inputs = s.querySelector(`#node_basic`).parentNode.querySelectorAll(".container__input");
                    let icon = null;
                    if (this.node_basic.icon) {
                        if (this.node_basic.icon != inputs[3].value) icon = await this.img(inputs[3].value);
                    } else {
                        if (inputs[3].value) icon = await this.img(inputs[3].value);
                    };
                    let new_data = {
                        name: (this.node_basic.name != inputs[0].value) ? inputs[0].value : null,
                        node_name: (this.node_basic.node_name != inputs[2].value) ? inputs[2].value : null,
                        icon: icon,
                    };
                    await this.fetchdata(`${this.api}/nodes/${this.node_basic.id}`, {
                        data: new_data
                    }).then(json => this.node_basic = json);
                });
                s.querySelector(`#node_speech`).parentNode.querySelector("button").addEventListener("click", async () => {
                    let inputs = s.querySelector(`#node_speech`).parentNode.querySelectorAll(".container__input");
                    let new_data = {
                        searchable: (this.node_basic.searchable != inputs[0].checked) ? inputs[0].checked : null,
                        tags: (this.node_basic.tags.join("\n") != inputs[1].value) ? inputs[1].value.split("\n").filter(i => i) : null,
                        enableSpeakQuestion: (this.node_basic.enable_speak_question != inputs[2].checked) ? inputs[2].checked : null,
                        enableJoinQuestion: (this.node_basic.enable_join_question != inputs[4].checked) ? inputs[4].checked : null,
                    };
                    if (inputs[3].value && this.node_basic.enable_speak_question && this.node_basic.speak_questions[0].content != inputs[3].value) {
                        this.fetchdata(`${this.api}/nodes/${this.node_basic.id}/questions/${this.node_basic.speak_questions[0].id}`, {
                            data: {
                                content: inputs[3].value
                            }
                        });
                    };
                    if (inputs[5].value && this.node_basic.enable_join_question && this.node_basic.join_questions[0].content != inputs[5].value) {
                        this.fetchdata(`${this.api}/nodes/${this.node_basic.id}/questions/${this.node_basic.join_questions[0].id}`, {
                            data: {
                                content: inputs[5].value
                            }
                        });
                    };
                    await this.fetchdata(`${this.api}/nodes/${this.node_basic.id}`, {
                        data: new_data
                    }).then(json => this.node_basic = json);
                });
                return s;
            };
            load_ic_nodes_switch() {
                let root = this.page.querySelector(`#node_topic`).parentNode;
                let content = root.querySelector(".content");
                root.querySelector(".tab1").addEventListener("click", () => {
                    content.innerHTML = "";
                    this.load_ic_nodes_tab1(this.node_basic);
                });
                root.querySelector(".tab2").addEventListener("click", () => {
                    content.innerHTML = "";
                    this.load_ic_nodes_tab2(this.node_basic);
                });
                root.querySelector(".tab1").click();
            };
            del_ic_node(node) {
                let del_confirm = confirm(`防手滑二次确认：真的要删除节点：${node.name} 吗？`);
                if (!del_confirm) return false;
                return this.fetchdata(`${this.api}/topics/${node.id}`, {
                    method: "DELETE",
                    onsuccess: "删除节点成功！",
                    onfail: "删除节点失败！"
                }).then(() => this.load_node_info());
            };
            load_ic_nodes_tab1(json) {
                const icons = ["friends", "like-bubble", "talk-bubble", "parchment", "pub", "holiday", "flower-shop", "park", "codex", "golden-key", "crown", "aquamarine", "hanging-garden", "mansion", "desert-city", "jade-castle", "black-cat", "orange-cat", "four-leaf-clover", "dango", "modern-city", "hill-castle", "open-air-mansion", "seaside", "envelope", "note", "newspaper", "warn", "seasoning", "free-time", "halloween", "explorer", "matches", "box-gift", "task", "ear-coffee", "christmas-gift", "winter-snow", "snowman-bask", "amusement-park", "rect-potion", "rounded-potion", "gold-sword", "iron-hammer", "sketch", "potted-plants", "gift-warehouse", "forest-hut", "wood", "grenade", "bow-arrow", "tabby-cat", "thermometer", "strawberry-smoothie", "red-spotted-mushroom", "radish", "polaroid-camera", "game-cassette", "coca-cola", "facial-mask", "raw-chocolate", "nutritious-convenient", "iron-pliers", "medical-kit", "white-daisy", "island-map", "iron-magnifier", "fire-extinguisher", "cube-with-stand", "cube-truncated", "cube-corner", "hex-cells", "sliced-hexprism", "pyramid", "sliced-cube", "sliced-cylinder"];
                const colors = new Map([
                    ["ruri", {
                        name: "琉璃",
                        hex: "#2151a2"
                    }],
                    ["yamabuki", {
                        name: "山吹",
                        hex: "#f2ab31"
                    }],
                    ["terigaki", {
                        name: "照柿",
                        hex: "#af5d3e"
                    }],
                    ["tsuyukusa", {
                        name: "露草",
                        hex: "#4b9dd7"
                    }],
                    ["entan", {
                        name: "铅丹",
                        hex: "#c0544d"
                    }],
                    ["seiji", {
                        name: "青磁",
                        hex: "#6da4a2"
                    }],
                    ["kikyo", {
                        name: "桔梗",
                        hex: "#5b468e"
                    }],
                    ["wakatake", {
                        name: "若竹",
                        hex: "#649f78"
                    }],
                    ["kurumi", {
                        name: "胡桃",
                        hex: "#857063"
                    }],
                    ["benimidori", {
                        name: "红碧",
                        hex: "#7485c9"
                    }],
                    ["tokusa", {
                        name: "木贼",
                        hex: "#356143"
                    }],
                    ["kohaku", {
                        name: "琥珀",
                        hex: "#b7732f"
                    }],
                    ["kyara", {
                        name: "伽罗",
                        hex: "#684c29"
                    }],
                    ["ichigo", {
                        name: "莓",
                        hex: "#9f4851"
                    }],
                    ["araisyu", {
                        name: "洗朱",
                        hex: "#eb9167"
                    }],
                    ["momo", {
                        name: "桃",
                        hex: "#e591a0"
                    }]
                ]);
                const card = MewTool.dom(MewTool.template(this.templates[2], {
                    moderate_node_name: (json.moderation_topic_id) ? json.objects.topics[json.moderation_topic_id].name : "没有权限查看管理专用节点名称。",
                    is_moderator: json.member && (json.member.is_moderator || json.member.is_super_moderator) ? "" : "disabled",
                    map_size_tip: (json.map_size == 3) ? "3x3，请注意装修范围。更改保存后可能需要至少5分钟才会应用。任意时刻节点总数超过5个，基建规模即可扩大至5x5。" : "5x5，更改保存后会立即应用。"
                }));
                const ic = new class {
                    topics = new Map();
                    menus1 = new Map();
                    menus2 = new Map();
                    root = card.querySelector(".ic_root");
                    constructor(manage, topics) {
                        this.manage = manage;
                        this.load_topic(topics)
                    };
                    load_topic(topics) {
                        for (let warp of this.root.children) this.undeploy(warp);
                        for (let topic of topics) {
                            this.topics.set(topic.id, Object.assign({}, topic));
                            if (!topic.deployed) continue;
                            this.deploy(this.warp(topic.space_position.x + "," + topic.space_position.y), topic.id);
                        };
                    };
                    warp(pos) {
                        return this.root.querySelector(`div[pos='${pos}']`)
                    };
                    deploy(warp, id) {
                        let topic = this.topics.get(id);
                        let [x, y] = warp.getAttribute("pos").split(",");
                        topic.deployed = true;
                        topic.space_position = {
                            x: x,
                            y: y,
                            z: 0
                        };
                        let el = MewTool.dom(`<div
                        title="${topic.name}"
                        class="icon_size_${topic.icon.size}"
                        style="background-color:${colors.get(topic.icon.color).hex}">
                            <img src="https://cdn.mew.fun/spacelize/preset/icons/${topic.icon.name}.png" />
                        </div>`);
                        let menu = (e) => {
                            MewTool.contextmenu(e, new Map([
                                [warp.children[0].getAttribute("title"), () => {}],
                                [`想法：${topic.thought_count}，消息：${topic.message_count}`, () => {}],
                                ["编辑节点", () => {
                                    this.edit_ic_node(id);
                                }],
                                ["移除节点", () => {
                                    this.undeploy(warp, id);
                                }]
                            ]));
                        };
                        this.menus1.set(id, menu);
                        warp.setAttribute("deployed", true);
                        warp.addEventListener("click", menu);
                        warp.removeEventListener("click", this.menus2.get(id) || null);
                        warp.append(el);
                    };
                    undeploy = (warp, id) => {
                        if (warp.getAttribute("pos") == "0,0") return false;
                        if (id) this.topics.get(id).deployed = false;
                        let menu = (e) => {
                            let deploy = (e) => {
                                let menus = new Map();
                                for (let topic of this.topics.values()) {
                                    if (topic.deployed) continue;
                                    menus.set({
                                        text: topic.name,
                                        id: topic.id
                                    }, () => {
                                        this.deploy(warp, topic.id);
                                    });
                                };
                                if (menus.size == 0) return false;
                                MewTool.contextmenu(e, menus);
                            };
                            MewTool.contextmenu(e, new Map([
                                ["部署节点", deploy],
                                ["新建节点", () => {
                                    this.edit_ic_node();
                                }],
                            ]));
                        };
                        this.menus2.set(id, menu);
                        warp.innerHTML = "";
                        warp.setAttribute("deployed", false);
                        warp.addEventListener("click", menu);
                        warp.removeEventListener("click", this.menus1.get(id) || null);
                    };
                    edit_ic_node(id) {
                        let topic = (id) ? this.topics.get(id) : {
                            icon: {}
                        };
                        let page = MewTool.stdpage(MewTool.template(this.manage.templates[5], {
                            title: (id) ? "编辑节点" : "添加节点",
                            name: topic.name || "",
                            icon: topic.icon.name || "friends",
                            color: topic.icon.color || "ruri",
                            colorhex: topic.icon.color ? colors.get(topic.icon.color).hex : "#2151a2",
                            size: topic.icon.size || "M",
                        }));
                        for (let icon of icons) {
                            let el = MewTool.dom(`<div><div class="icon_size_M"><img src="https://cdn.mew.fun/spacelize/preset/icons/${icon}.png"></div></div>`);
                            el.addEventListener("click", () => {
                                page.querySelectorAll(".node_edit_items")[0].value = icon;
                                page.querySelector("#node_preview").children[0].src = `https://cdn.mew.fun/spacelize/preset/icons/${icon}.png`;
                            })
                            page.querySelectorAll(".container__input")[2].append(el);
                        };
                        for (let color of colors) {
                            let el = MewTool.dom(`<div class="node_edit_selecor" style="background-color:${color[1].hex};"><span>${color[1].name}</span></div>`);
                            el.addEventListener("click", () => {
                                page.querySelectorAll(".node_edit_items")[1].value = color[0];
                                page.querySelector("#node_preview").style = `background-color:${color[1].hex};`
                            })
                            page.querySelectorAll(".container__input")[3].append(el);
                        };
                        page.querySelectorAll(".container__input")[4].addEventListener("change", (e) => {
                            let size = ["S", "M", "L"].includes(e.currentTarget.value) ? e.currentTarget.value : null;
                            if (size) page.querySelector("#node_preview").className = "icon_size_" + e.currentTarget.value;
                        });
                        page.querySelectorAll(".container__input")[5].addEventListener("click", () => {
                            let url = (id) ? `${this.manage.api}/topics/${id}` : `${this.manage.api}/nodes/${json.id}/topics`;
                            let text = (id) ? "修改" : "创建";
                            let inputs = page.querySelectorAll(".node_edit_items");
                            if (!inputs[2].value) return mew.notice("提示", "未填写节点名称！");
                            let new_data = {
                                name: inputs[2].value,
                                icon: {
                                    name: inputs[0].value,
                                    size: inputs[3].value || "M",
                                    color: inputs[1].value,
                                    customize: false
                                }
                            };
                            this.manage.fetchdata(url, {
                                method: (id) ? "PATCH" : "POST",
                                onsuccess: "节点" + text + "成功！",
                                onfail: "节点" + text + "失败！",
                                data: new_data
                            }).then(() => this.manage.load_node_info()).then(json => this.load_topic(json.topics));
                        });
                        page.apply();
                    };
                    get data() {
                        let data = [];
                        for (let topic of this.topics.values()) {
                            if (!topic.deployed) continue;
                            data.push({
                                id: topic.id,
                                position: topic.space_position,
                                icon: topic.icon
                            });
                        };
                        return {
                            View: data
                        };
                    };
                }(this, json.topics);
                ic.warp("0,0").append(MewTool.dom(`<div class="icon_size_L" style="background-image:url(${json.objects.media[json.icon].url})"></div>`));
                card.querySelectorAll("button")[0].addEventListener("click", () => {
                    this.fetchdata(`${this.api}/nodes/${json.id}/topics/space-position`, {
                        data: ic.data,
                        method: "POST"
                    }).then(() => this.load_node_info());
                });
                card.querySelectorAll("button")[1].addEventListener("click", () => {
                    if (!json.moderation_topic_id) return mew.notice("提示", "没有权限修改管理专用节点！");
                    this.fetchdata(`${this.api}/topics/${json.moderation_topic_id}/moderation`, {
                        data: {
                            name: card.querySelectorAll("input")[1].value
                        }
                    }).then(() => this.load_node_info());
                });
                this.page.querySelector(`#node_topic`).parentNode.querySelector(".content").append(card);
            };
            load_ic_nodes_tab2(json) {
                let content = this.page.querySelector(`#node_topic`).parentNode.querySelector(".content");
                if (json.topics == 0 || !json.topics) return content.append(this.load_textcard("没有节点或者无权限查看节点列表！"));
                let btn = MewTool.dom(this.templates[4]);
                for (let t of json.topics) {
                    let topic = MewTool.dom(MewTool.template(this.templates[3], {
                        id: t.id,
                        title: t.name
                    }));
                    topic.querySelectorAll("button")[0].addEventListener("click", (e) => {
                        let root = e.target.parentNode.parentNode;
                        if (!root.previousSibling) return false;
                        if (!root.previousSibling.previousSibling) return content.prepend(topic);
                        root.previousSibling.previousSibling.after(topic);
                    });
                    topic.querySelectorAll("button")[1].addEventListener("click", (e) => {
                        let root = e.target.parentNode.parentNode;
                        if (!root.nextElementSibling.id) return false;
                        root.nextElementSibling.after(topic);
                    });
                    topic.querySelectorAll("button")[2].addEventListener("click", (e) => {
                        this.del_ic_node({
                            id: t.id,
                            name: t.name
                        }).then(() => {
                            topic.remove();
                        });
                    });
                    content.append(topic);
                };
                btn.addEventListener("click", () => {
                    let inputs = this.page.querySelector(`#node_topic`).parentNode.querySelectorAll(".input_container");
                    let positions = [];
                    for (let i = 0; i < inputs.length - 1; i++) positions.push({
                        id: inputs[i].id.slice(11),
                        position: i + 1,
                    });
                    this.fetchdata(`${this.api}/nodes/${json.id}}/topics/position`, {
                        data: {
                            positions: positions
                        }
                    });
                });
                content.append(btn);
            };
            load_member_switch() {
                let root = this.page.querySelector(`#node_member`).parentNode;
                let content = root.querySelector(".content");
                root.querySelector(".tab1").addEventListener("click", () => {
                    content.innerHTML = "";
                    this.load_member_search(content, this.node_basic.id);
                    this.load_member_card(content, `${this.api}/nodes/${this.node_basic.id}/members?limit=50`);
                });
                root.querySelector(".tab2").addEventListener("click", () => {
                    content.innerHTML = "";
                    this.load_member_search(content, this.node_basic.id, ["type=restricted"]);
                    this.load_member_card(content, `${this.api}/nodes/${this.node_basic.id}/members?limit=50&type=restricted`);
                });
                root.querySelector(".tab3").addEventListener("click", () => {
                    content.innerHTML = "";
                    this.load_member_search(content, this.node_basic.id, ["type=blocked"], "ban");
                    this.load_member_card(content, `${this.api}/nodes/${this.node_basic.id}/bans?limit=50`, null, "ban");
                });
            };
            load_joinreq_switch() {
                let root = this.page.querySelector(`#node_join`).parentNode;
                let content = root.querySelector(".content");
                root.querySelector(".tab1").addEventListener("click", () => {
                    content.innerHTML = "";
                    this.load_member_card(content, `${this.api}/nodes/${this.node_basic.id}/applications?type=join&state=pending&limit=50`, null, "req_pending_join");
                });
                root.querySelector(".tab2").addEventListener("click", () => {
                    content.innerHTML = "";
                    this.load_member_card(content, `${this.api}/nodes/${ this.node_basic.id}/applications?type=join&state=approved&limit=50`, null, "req_approved");
                });
                root.querySelector(".tab3").addEventListener("click", () => {
                    content.innerHTML = "";
                    this.load_member_card(content, `${this.api}/nodes/${ this.node_basic.id}/applications?type=join&state=rejected&limit=50`, null, "req_rejected_join");
                });
            };
            load_speakreq_switch() {
                let root = this.page.querySelector(`#node_speak`).parentNode;
                let content = root.querySelector(".content");
                root.querySelector(".tab1").addEventListener("click", () => {
                    content.innerHTML = "";
                    this.load_member_card(content, `${this.api}/nodes/${ this.node_basic.id}/applications?type=speak&state=pending&limit=50`, null, "req_pending_speak");
                });
                root.querySelector(".tab2").addEventListener("click", () => {
                    content.innerHTML = "";
                    this.load_member_card(content, `${this.api}/nodes/${ this.node_basic.id}/applications?type=speak&state=approved&limit=50`, null, "req_approved");
                });
                root.querySelector(".tab3").addEventListener("click", () => {
                    content.innerHTML = "";
                    this.load_member_card(content, `${this.api}/nodes/${this.node_basic.id}/applications?type=speak&state=rejected&limit=50`, null, "req_rejected_speak");
                });
            };
            async load_member_card(content, base_url, after, type) {
                let members = await this.fetchdata((after) ? `${base_url}&after=${after}` : base_url, {
                    alert: false,
                    method: "GET"
                }).catch(err => {
                    content.append(this.load_textcard("加载成员列表时发生错误：" + err.message));
                });
                if (!members) return false;
                if (members.entries.length == 0) return content.append(this.load_textcard("啥也没有(っ °Д °;)っ"));
                for (let user of members.entries) {
                    if (after) {
                        if (user.is_super_moderator || user.is_moderator) continue;
                    };
                    switch (type) {
                        case "ban":
                            content.append(await this.load_ban_card(members, user, this.templates[7]));
                            break;
                        case "req_pending_join":
                            content.append(this.load_req_pending_card(members, user, this.templates[8], "join"));
                            break;
                        case "req_pending_speak":
                            content.append(this.load_req_pending_card(members, user, this.templates[8], "speak"));
                            break;
                        case "req_approved":
                            content.append(this.load_req_approved_card(members, user, this.templates[9]));
                            break;
                        case "req_rejected_join":
                            content.append(this.load_req_rejected_card(members, user, this.templates[10], "join"));
                            break;
                        case "req_rejected_speak":
                            content.append(this.load_req_rejected_card(members, user, this.templates[10], "speak"));
                            break;
                        default:
                            content.append(this.load_member_normal_card(members, user, this.templates[6]));
                            break;
                    };
                };
                if (members.entries.length == 50) {
                    let loadmore = this.load_textcard("点击加载更多");
                    loadmore.style.cursor = "pointer";
                    loadmore.querySelector(".accordion__header").addEventListener("click", async () => {
                        await this.load_member_card(content, base_url, members.next_cursor);
                        loadmore.remove();
                    });
                    content.append(loadmore);
                };
            };
            load_member_normal_card(json, user, template) {
                let avatar_id = json.objects.users[user.user_id].avatar;
                let card = MewTool.dom(MewTool.template(template, {
                    username: json.objects.users[user.user_id].username,
                    name: json.objects.users[user.user_id].name,
                    class: (user.is_super_moderator) ? "领主" : (user.is_moderator) ? "管理员" : "成员",
                    avatar: (avatar_id) ? json.objects.media[avatar_id].url + "~tplv-c226mjqywu-size:96.image" : "/_next/static/images/default-avatar-1-d21d3e0c70ccc333b797212fed6be0c9.png",
                    P_moderator: (user.is_moderator) ? "checked" : "",
                    P_thought: ([32, 32 + 16, 32 + 64, 16 + 32 + 64].includes(user.permissions_deny)) ? "" : "checked",
                    P_talk: ([16, 16 + 32, 16 + 64, 16 + 32 + 64].includes(user.permissions_deny)) ? "" : "checked",
                    P_comment: ([64, 64 + 32, 64 + 16, 16 + 32 + 64].includes(user.permissions_deny)) ? "" : "checked",
                }));
                card.querySelectorAll("button")[0].addEventListener("click", () => {
                    let _confirm = confirm(`确定将领主身份转移给 ${json.objects.users[user.user_id].name} 吗？你将不再拥有该据点和该据点的管理权限。`);
                    if (!_confirm) return false;
                    this.fetchdata(this.api + "/nodes/" + user.node_id, {
                        data: {
                            superModerator: user.user_id
                        },
                        onsuccess: "领主转移成功！",
                        onfail: "领主转移失败！"
                    });
                });
                card.querySelectorAll("button")[1].addEventListener("click", () => {
                    this.ban_someone(user.user_id, json.objects.users[user.user_id].name);
                });
                card.querySelectorAll("button")[2].addEventListener("click", () => {
                    let _confirm = confirm(`${json.objects.users[user.user_id].name} 将被移出据点，但可重新加入。确定将Ta移出据点吗？`);
                    if (!_confirm) return false;
                    this.fetchdata(`${this.api}/nodes/${ user.node_id}/members/${user.user_id}`, {
                        method: "DELETE",
                        onsuccess: "移出据点操作成功！",
                        onfail: "移出据点操作失败！"
                    });
                });
                card.querySelectorAll("button")[3].addEventListener("click", () => {
                    let inputs = document.querySelector(`#member_${json.objects.users[user.user_id].username}`).parentNode.querySelectorAll("input.container__input");
                    let P_thought = (inputs[0].checked) ? 0 : 32,
                        P_talk = (inputs[1].checked) ? 0 : 16,
                        P_comment = (inputs[2].checked) ? 0 : 64;
                    let data = {
                        isModerator: inputs[3].checked,
                        permissionsDeny: P_comment + P_talk + P_thought
                    };
                    this.fetchdata(`${this.api}/nodes/${ user.node_id}/members/${user.user_id}`, {
                        data: data
                    });
                });
                return card;
            };
            load_req_pending_card(json, user, template, type) {
                let avatar_id = json.objects.users[user.user_id].avatar;
                let card = MewTool.dom(MewTool.template(template, {
                    type: type,
                    username: json.objects.users[user.user_id].username,
                    name: json.objects.users[user.user_id].name,
                    avatar: (avatar_id) ? json.objects.media[avatar_id].url + "~tplv-c226mjqywu-size:96.image" : "/_next/static/images/default-avatar-1-d21d3e0c70ccc333b797212fed6be0c9.png",
                    date: new Date(user.applied_at).toLocaleString("chinese", {
                        hour12: false
                    }),
                    awnser: user.answers[0].content
                }));
                card.querySelectorAll("button")[1].addEventListener("click", () => {
                    this.fetchdata(`${this.api}/nodes/${user.node_id}/applications/${type}/${user.user_id}`, {
                        data: {
                            state: "approved"
                        },
                        onsuccess: "成功通过该申请！",
                        onfail: "通过该申请失败！"
                    });
                });
                card.querySelectorAll("button")[2].addEventListener("click", () => {
                    this.fetchdata(`${this.api}/nodes/${user.node_id}/applications/${type}/${user.user_id}`, {
                        data: {
                            state: "rejected"
                        },
                        onsuccess: "成功拒绝该申请！",
                        onfail: "拒绝该申请失败！"
                    });
                });
                return card;
            };
            load_req_approved_card(json, user, template) {
                let avatar_id = json.objects.users[user.user_id].avatar;
                let card = MewTool.dom(MewTool.template(template, {
                    username: json.objects.users[user.user_id].username,
                    name: json.objects.users[user.user_id].name,
                    avatar: (avatar_id) ? json.objects.media[avatar_id].url + "~tplv-c226mjqywu-size:96.image" : "/_next/static/images/default-avatar-1-d21d3e0c70ccc333b797212fed6be0c9.png",
                    date: new Date(user.applied_at).toLocaleString("chinese", {
                        hour12: false
                    }),
                    awnser: user.answers[0].content
                }));
                return card;
            };
            load_req_rejected_card(json, user, template, type) {
                let avatar_id = json.objects.users[user.user_id].avatar;
                let card = MewTool.dom(MewTool.template(template, {
                    username: json.objects.users[user.user_id].username,
                    name: json.objects.users[user.user_id].name,
                    avatar: (avatar_id) ? json.objects.media[avatar_id].url + "~tplv-c226mjqywu-size:96.image" : "/_next/static/images/default-avatar-1-d21d3e0c70ccc333b797212fed6be0c9.png",
                    date: new Date(user.applied_at).toLocaleString("chinese", {
                        hour12: false
                    }),
                    awnser: user.answers[0].content
                }));
                card.querySelectorAll("button")[1].addEventListener("click", () => {
                    this.ban_someone(user.user_id, json.objects.users[user.user_id].name);
                });
                card.querySelectorAll("button")[2].addEventListener("click", () => {
                    this.fetchdata(`${this.api}/nodes/${user.node_id}/applications/${type}/${user.user_id}`, {
                        data: {
                            state: "pending"
                        },
                        onsuccess: "恢复申请成功！",
                        onfail: "恢复申请失败！"
                    });
                });
                return card;
            };
            async load_ban_card(json, user, template) {
                let avatar_id = json.objects.users[user.user_id].avatar;
                let card = MewTool.dom(MewTool.template(template, {
                    username: json.objects.users[user.user_id].username,
                    name: json.objects.users[user.user_id].name,
                    avatar: (avatar_id) ? json.objects.media[avatar_id].url + "~tplv-c226mjqywu-size:96.image" : "/_next/static/images/default-avatar-1-d21d3e0c70ccc333b797212fed6be0c9.png",
                    date: new Date(user.banned_at).toLocaleString("chinese", {
                        hour12: false
                    }),
                    op_username: await fetch("https://api.mew.fun/api/v1/users/" + user.operator_id).then(res => res.json()).then(json => json.username),
                }));
                card.querySelectorAll("button")[2].addEventListener("click", () => {
                    let _confirm = confirm(`${json.objects.users[user.user_id].name} 将被移出黑名单，并可以重新加入据点。确定将Ta移出黑名单吗？`);
                    if (!_confirm) return false;
                    this.fetchdata(`${this.api}/nodes/${user.node_id}/bans/${user.user_id}`, {
                        method: "DELETE",
                        onsuccess: "移出黑名单成功！",
                        onfail: "移出黑名单失败！"
                    });
                });
                return card;
            };
            ban_someone(id, name) {
                let _confirm = confirm(`${name} 将被移出据点，且无法重新加入。确定将Ta加入黑名单吗？`);
                if (!_confirm) return false;
                this.fetchdata(`${this.api}/nodes/${this.node_basic.id}/bans/${id}`, {
                    method: "PUT",
                    onsuccess: "加入黑名单成功！",
                    onfail: "加入黑名单失败！"
                });
            };
            load_member_search(content, node_id, query, type) {
                query = query || [];
                type = type || null;
                let search = MewTool.dom(this.templates[11]);
                let input = search.querySelector(".accordion__content").querySelectorAll("input")[0];
                search.querySelector("button").addEventListener("click", async () => {
                    let params = [`keyword=${input.value}`];
                    for (let i of query) params.push(i);
                    content.innerHTML = "";
                    this.load_member_search(content, node_id, query);
                    await this.load_member_card(content, `${this.api}/nodes/${node_id}/members/search?${params.join("&")}`, null, type);
                });
                content.append(search);
            };
            load_textcard(text) {
                let card = MewTool.dom(MewTool.template(this.templates[1], {
                    text: text
                }));
                return card;
            };
            async load_shelf() {
                let content = this.page.querySelector("#node_library").parentNode.querySelector(".accordion__content");
                let template_addshelf = MewTool.dom(this.templates[14]);
                let lib = await this.fetchdata(`${this.api}/nodes/${this.node_basic.id}/libraries`, {
                    alert: false,
                    method: "GET"
                }).catch(err => {
                    content.append(this.load_textcard("加载书架列表时发生错误：" + err.message));
                });
                if (!lib) return false;
                for (let e of lib.entries) {
                    if (e.parent_id) {
                        let shelf_entry = this.load_shelf_entry(e, this.templates[13]);
                        content.querySelector(`#shelf_${e.parent_id}`).parentNode.querySelectorAll(".input_container")[1].append(shelf_entry);
                        continue;
                    };
                    let shelf = this.load_shelf_bookshelf(e, this.templates[12], this.templates[15]);
                    content.append(shelf);
                };
                template_addshelf.querySelector("button").addEventListener("click", () => {
                    this.fetchdata(`${this.api}/nodes/${this.node_basic.id}/libraries`, {
                        method: "POST",
                        data: {
                            name: template_addshelf.querySelector("input.container__input").value || null,
                        },
                        onsuccess: "创建书架成功！",
                        onfail: "创建书架失败！"
                    }).catch(err => err);
                });
                content.append(template_addshelf);
            };
            load_shelf_entry(entry, template_entry) {
                let shelf_entry = MewTool.dom(MewTool.template(template_entry, {
                    id: entry.id,
                    title: entry.name,
                    desc_text: entry.description || entry.name,
                    desc_image: entry.icon || ""
                }));
                shelf_entry.querySelectorAll("button")[0].addEventListener("click", () => {
                    let del_confirm = confirm(`防手滑二次确认：真的要删除词条：${entry.name} 吗？`);
                    if (!del_confirm) return false;
                    this.fetchdata(`${this.api}/nodes/${this.node_basic.id}/libraries/${entry.id}`, {
                        method: "DELETE",
                        onsuccess: "删除词条成功！",
                        onfail: "删除词条失败！",
                    });
                });
                shelf_entry.querySelectorAll("button")[1].addEventListener("click", async () => {
                    let inputs = shelf_entry.querySelectorAll(".container__input");
                    let data = {
                        name: inputs[0].value || null,
                        description: inputs[1].value || null,
                        icon: await this.img(inputs[2].value) || null,
                        parentId: entry.id,
                    };
                    this.fetchdata(`${this.api}/nodes/${this.node_basic.id}/libraries/${entry.id}`, {
                        data: data
                    });
                });
                return shelf_entry;
            };
            load_shelf_bookshelf(entry, template_bookshelf, template_addentry) {
                let shelf = MewTool.dom(MewTool.template(template_bookshelf, {
                    id: entry.id,
                    title: entry.name
                }));
                shelf.querySelectorAll("button")[0].addEventListener("click", () => {
                    let del_confirm = confirm(`防手滑二次确认：真的要删除书架：${entry.name} 吗？`);
                    if (!del_confirm) return false;
                    this.fetchdata(`${this.api}/nodes/${this.node_basic.id}/libraries/${entry.id}`, {
                        method: "DELETE",
                        onsuccess: "删除书架成功！",
                        onfail: "删除书架失败！",
                    });
                });
                shelf.querySelectorAll("button")[1].addEventListener("click", () => {
                    this.fetchdata(`${this.api}/nodes/${this.node_basic.id}/libraries/${entry.id}`, {
                        data: {
                            name: shelf.querySelectorAll(".container__input")[0].value || null,
                        }
                    });
                });
                let addentry = MewTool.dom(MewTool.template(template_addentry, {
                    parent_id: entry.id
                }));
                addentry.querySelector("button").addEventListener("click", async () => {
                    let inputs = addentry.querySelectorAll(".container__input");
                    let data = {
                        name: inputs[0].value || null,
                        description: inputs[1].value || null,
                        icon: await this.img(inputs[2].value) || null,
                        parentId: entry.id,
                    }
                    this.fetchdata(`${this.api}/nodes/${this.node_basic.id}/libraries`, {
                        method: "POST",
                        data: data,
                        onsuccess: "添加词条成功！",
                        onfail: "添加词条失败！"
                    }).catch(err => err);
                });
                shelf.querySelectorAll(".input_container")[1].append(addentry);
                return shelf;
            };
        }(await Promise.all([
            MewTool.fetchres("https://fastly.jsdelivr.net/gh/yige233/bettermew@7bb2bd0/template/node_manage.html"),
            MewTool.fetchres("https://fastly.jsdelivr.net/gh/yige233/bettermew@4cbcef5/template/node_manage_member_text_card.html"),
            MewTool.fetchres("https://fastly.jsdelivr.net/gh/yige233/bettermew@7bb2bd0/template/node_manage_topic_tab1.html"),
            MewTool.fetchres("https://fastly.jsdelivr.net/gh/yige233/bettermew@7bb2bd0/template/node_manage_topic_tab2_card.html"),
            MewTool.fetchres("https://fastly.jsdelivr.net/gh/yige233/bettermew@4cbcef5/template/node_manage_topic_tab2_btn.html"),
            MewTool.fetchres("https://fastly.jsdelivr.net/gh/yige233/bettermew@7bb2bd0/template/node_manage_topic_tab3.html"),
            MewTool.fetchres("https://fastly.jsdelivr.net/gh/yige233/bettermew@2582b68/template/node_manage_member_normal_card.html"),
            MewTool.fetchres("https://fastly.jsdelivr.net/gh/yige233/bettermew@2582b68/template/node_manage_member_ban_card.html"),
            MewTool.fetchres("https://fastly.jsdelivr.net/gh/yige233/bettermew@0f5e462/template/node_manage_req_pending_card.html"),
            MewTool.fetchres("https://fastly.jsdelivr.net/gh/yige233/bettermew@2582b68/template/node_manage_req_approved_card.html"),
            MewTool.fetchres("https://fastly.jsdelivr.net/gh/yige233/bettermew@2582b68/template/node_manage_req_rejected_card.html"),
            MewTool.fetchres("https://fastly.jsdelivr.net/gh/yige233/bettermew@4cbcef5/template/node_manage_member_search_card.html"),
            MewTool.fetchres("https://fastly.jsdelivr.net/gh/yige233/bettermew@7bb2bd0/template/node_manage_shelf.html"),
            MewTool.fetchres("https://fastly.jsdelivr.net/gh/yige233/bettermew@7bb2bd0/template/node_manage_shelf_entry.html"),
            MewTool.fetchres("https://fastly.jsdelivr.net/gh/yige233/bettermew@c882444/template/node_manage_shelf_addshelf.html"),
            MewTool.fetchres("https://fastly.jsdelivr.net/gh/yige233/bettermew@c882444/template/node_manage_shelf_addentry.html")
        ]).catch(err => console.log(err)))
    }
}).addConf("btn", {
    type: "button",
    desc: "打开据点管理页",
    click: function () {
        this.func_once_result.page_render()
    }
}));
mew.load(new MewPlugin("msg_edit", {
    short_desc: "修改消息",
    long_desc: "右键已在聊天中发送的消息，对其撤回进行修改后再发送。仅可修改二分钟内发出的消息。",
    func_loop: function () {
        let nonce_gen = (len) => {
            let nonce = [];
            for (let i = 0; i < len; i++) {
                nonce.push(Math.floor(Math.random() * 10))
            };
            return nonce.join("");
        };
        if (document.querySelectorAll('div[class*="message-text_sent__"]').length == 0) return false;
        let messages = document.querySelectorAll('div[class*="message-text_sent__"]');
        for (let el of messages) {
            if (el.className.indexOf("mark_mewmsg_edit") != -1 || el.className.indexOf("message-text_bubble__") == -1) continue;
            el.parentNode.addEventListener("contextmenu", async e => {
                e.preventDefault();
                let message_id = MewTool.getreact(e.currentTarget).children[0].props.id;
                let message_content = MewTool.getreact(e.currentTarget.children[0]).children[1].props.children.props.children;
                let topicid = (document.querySelector("[class*='panel_list__']")) ?
                    document.querySelector("[class*='panel_list__']").querySelector("[class*='sidebar_selected__']").parentNode.getAttribute("data-id") : MewTool.getreact(document.querySelector("div[class*='message-container_widget__']")).children[0].props.children.props.topicId || 0
                if (topicid == 0) return false;
                MewTool.contextmenu(e, new Map([
                    ["重新发送", async (e) => {
                        let message_info = await this.func_once_result(message_id, message_content);
                        if (!message_info.created_at || Math.floor(new Date() / 1000) - Math.floor(new Date(message_info.created_at) / 1000) >= 120) return mew.notice("提示", "该消息已发出超过2分钟！");
                        let new_content = prompt("编辑新的信息。旧的信息将会被撤回。", message_content);
                        if (new_content && new_content != message_content) {
                            this.func_once_result(message_id, null, "DELETE");
                            fetch(`https://api.mew.fun/api/v1/topics/${topicid}/messages`, {
                                headers: {
                                    Authorization: localStorage.getItem("mew-token").replace(/"/g, ""),
                                    "Content-type": "application/json",
                                },
                                body: JSON.stringify({
                                    nonce: nonce_gen(18),
                                    content: new_content
                                }),
                                method: "POST",
                            });
                        };
                    }]
                ]));
            });
            el.classList.add("mark_mewmsg_edit");
        };
    },
    func_once: function () {
        return async function (id, content, method) {
            let res = await fetch(`https://api.mew.fun/api/v1/messages/${id}`, {
                headers: {
                    Authorization: localStorage.getItem("mew-token").replace(/"/g, ""),
                    "Content-Type": "application/json; charset=utf-8"
                },
                method: method || "PATCH",
                body: (content) ? JSON.stringify({
                    content: content
                }) : null
            });
            if (!method && res.ok) return await res.json() || {};
        };
    }
}));
mew.load(new MewPlugin("at", {
    short_desc: "@功能",
    long_desc: "在有人提及您的时候为您弹窗通知；点击用户名可快速复制用户昵称，并将光标置于消息编辑栏。@消息需要符合一定的格式。",
    func_once: async function () {
        mew.ws.on("message_create", (data) => {
            let author = data.objects.users[data.author_id].name,
                ats = Object.assign({}, this.configs.get("ats").value),
                keyword = [mew.ws.user.name, mew.ws.user.username, ...this.configs.get("keywords").value],
                blocks = Object.assign({}, this.configs.get("ats").value),
                detected = false,
                msg = data.content;
            if (!msg) return false;
            for (let i of keyword) {
                let special = i.match(/[\$|\(|\)|\*|\+|\.|\[|\]|\?|\\|\^|\{|\}|\|]{1}/g);
                let user = ats["u" + data.author_id];
                if (special)
                    for (let s of special) i = i.replace(s, "\\" + s);
                if (!new RegExp(`@${i}+[,|，|。|？|?|!|：|:|;|：|！|\\s]{1}`).test(msg) && !new RegExp(`@${i}$`).test(msg)) continue;
                detected = true;
                if (blocks["u" + data.author_id]) {
                    if (blocks["u" + data.author_id] - Math.floor(new Date() / 1000) > 0) return false;
                    delete blocks["u" + data.author_id];
                };
                if (user) {
                    user.push(Math.floor(new Date() / 1000));
                    if (user.length == 8) user.shift();
                    if (user.length == 7 && user[6] - user[0] <= 180) {
                        blocks["u" + data.author_id] = Math.floor(new Date() / 1000) + 900;
                        detected = false;
                    };
                } else ats["u" + data.author_id] = [Math.floor(new Date() / 1000)];
                this.configs.set("ats", ats);
                this.configs.set("block", blocks);
                if (detected) break;

            };
            if (!detected) return false;
            if (data.node_id) {
                for (let i of this.func_once_result.entries) {
                    if (i.id == data.node_id) {
                        for (let x of i.topics) {
                            if (x.id == data.topic_id) return mew.notice(`${author} 在 ${i.name} 的 ${x.name} @了你！`, msg, () => {
                                window.open(`https://mew.fun/n/${i.node_name}?topicId=${x.id}`);
                            });
                        };
                    };
                };
            };
            mew.notice(`${author} 在私信中@了你！`, msg);
        });
        return await fetch(`https://api.mew.fun/api/v1/users/@me/mynodes`, {
            headers: {
                Authorization: localStorage.getItem("mew-token").replace(/"/g, "")
            }
        }).then(res => res.json());
    },
    func_loop: function () {
        let users = Array.from(document.querySelectorAll("[class*='message-text_name__']")).concat(Array.from(document.querySelectorAll("[class*='message-image_name__']")));
        for (let user of users) {
            user.style = "cursor:pointer";
            if (user.className.indexOf("called") == -1) {
                user.addEventListener("click", async (e) => {
                    if (!navigator.clipboard) return mew.notice("提示", "您的浏览器不支持剪贴板API！");
                    await navigator.clipboard.writeText("@" + e.target.innerText).catch(() => {
                        mew.notice("提示", "可能没有权限写入剪贴板！")
                    });
                    document.querySelectorAll("[class^='text-area-bar_form-root__']")[0].focus();
                });
                user.classList.add("called");
            };
        };
    }
}).addConf("keywords", {
    type: "text",
    desc: "可以在下方的文本框中添加能触发@提醒的关键词，每行一个。",
    default: [],
    get: function () {
        return this.configs.get("keywords").value.join("\n");
    },
    set: function (e) {
        return e.target.value.split("\n").filter(i => i);
    }
}).addConf("ats", {
    default: {}
}).addConf("block", {
    default: {}
}));
mew.load(new MewPlugin("tool_avatar", {
    hide: true,
    always: true
}).addConf("btn", {
    type: "button",
    desc: "通过Mew图片链接直接设置头像",
    short_desc: "输入图片url",
    click: async function () {
        let url = prompt("输入Mew图片url。注意：请不要使用过于花里胡哨的gif，这可能会招致反感。");
        if (!url) return false;
        let [id] = await MewTool.imgurl2id(url);
        if (!id) return mew.notice("提示", "不正确的图片链接！");
        await fetch(`https://api.mew.fun/api/v1/users/@me`, {
            headers: {
                Authorization: localStorage.getItem("mew-token").replace(/"/g, ""),
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                avatar: id.match(/[0-9]{18}?/g)[0],
            }),
            method: "PATCH"
        }).then(async res => {
            let json = await res.json();
            mew.notice("提示", `新头像id为：${json.avatar}，刷新网页以查看新头像。`);
        }).catch(err => {
            mew.notice("提示", "新头像设置失败！");
            console.warn(err)
        });
    }
}));
mew.load(new MewPlugin("custom_css", {
    short_desc: "自定义css",
    long_desc: "加载自定义css样式。",
    func_once: function () {
        MewTool.loadcss(this.configs.get("custom_css").value);
    }
}).addConf("custom_css", {
    type: "text",
    desc: "填入自定义css。",
    get: function () {
        return this.configs.get("custom_css").value;
    },
    set: function (e) {
        return e.target.value;
    }
}));
mew.load(new MewPlugin("fix_img_menu", {
    long_desc: "点击打开原图时，部分浏览器有没法右键另存为的问题。该插件为原图增加了右键菜单，提供新标签页中打开图片的选项。",
    short_desc: "修复保存不了图片",
    func_loop: function () {
        for (let el of document.querySelectorAll(".pswp__zoom-wrap")) {
            if (el.className.indexOf("pswp__zoom-wrap-marked") != -1) return false;
            el.addEventListener("contextmenu", (e) => {
                e.preventDefault();
                let url = el.querySelector("img").src;
                let options = new Map([
                    ["新标签页中打开图片", (e) => {
                        window.open(url);
                    }],
                    ["保存图片", async () => {
                        let mime_type_ext = new Map([
                            ["image/gif", "gif"],
                            ["image/x-icon", "ico"],
                            ["image/svg+xml", "svg"],
                            ["image/jpeg", "jpg"],
                            ["image/tiff", "tiff"],
                            ["image/png", "png"],
                            ["image/webp", "webp"]
                        ]);
                        let blob = await fetch(url).then(res => res.blob());
                        let a = document.createElement('a');
                        let fname = prompt("将图片保存为：", `${url.match(/[0-9a-f]{32}?/g)[0]}.${mime_type_ext.get(blob.type) || blob.type}`);
                        if (!fname) return false;
                        a.download = fname;
                        a.href = URL.createObjectURL(blob);
                        a.click();
                        a = null;
                    }],
                    ["复制图片到剪贴板", async () => {
                        if (!navigator.clipboard) return mew.notice("提示", "您的浏览器不支持剪贴板API！");
                        let blob = await fetch(url + "~tplv-c226mjqywu-size:999999.png").then(res => res.blob());
                        await navigator.clipboard.write([
                            new ClipboardItem({
                                [blob.type]: blob
                            })
                        ]).catch(() => {
                            mew.notice("提示", "可能没有权限写入剪贴板！")
                        });
                    }],
                    ["复制图片链接", async () => {
                        if (!navigator.clipboard) return mew.notice("提示", "您的浏览器不支持剪贴板API！");
                        await navigator.clipboard.writeText(url).catch(() => {
                            mew.notice("提示", "可能没有权限写入剪贴板！")
                        });
                    }]
                ]);
                mew.isActive(plugin_custom_stamps.id) && options.set("保存为自定义表情", async () => {
                    let [id, hash] = await MewTool.imgurl2id(url);
                    let desc = prompt("添加关于该图片的说明：");
                    desc = desc || "";
                    let stamps = plugin_custom_stamps.configs.get("stamps").value;
                    stamps.push(`${id}$${hash}$${desc}`);
                    plugin_custom_stamps.configs.set("stamps", stamps);
                });
                MewTool.contextmenu(e, options);
            });
            el.classList.add("pswp__zoom-wrap-marked");
        }
    }
}));
/**
 * 船新的框架！使用 import 导入两个类和一个已经实例化的，叫做mew的BetterMew对象: import { MewTool, MewPlugin, mew } from "./mew.frame.js"
 *
 * MewTool类：提供了一系列静态方法，省时省力
 * mew：用于加载各个插件，同时负责渲染设置页面。
 * MewPlugin类：用于创建Mew插件。
 *
 * mew：是一个已经实例化的Mew对象，用于加载各个插件，同时负责渲染设置页面。
 * mew.load(MewPlugin):传入一个MewPlugin插件对象。
 * mew.notice(title,msg,onclickfunc):创建一个通知，传入标题、消息本体和点击触发的函数。
 * mw.isActive(id):0.71新增，用于判断一个功能是否启用。
 * mew.ws:是一个已实例化的封装过的伪WebSocket，便于直接与消息交互，而无需关心其他。
 * 该连接在无用户登录时会被停止；已连接后断开会自动重连。
 *      mew.ws.token:只读属性。返回用于认证ws连接的token，也就是当前用户的登录cookie。
 *      mew.ws.readyState:和WebSocket的readyState相同。
 *      mew.ws.user:只读属性。返回当前连接到ws的用户信息。
 *      mew.ws.url:和WebSocket的readyState相同，但固定为"wss://gateway.mew.fun/socket.io/?EIO=4&transport=websocket"。
 *      mew.ws.on(event,fn):传入事件id和回调函数，在该事件触发时执行回调函数。向回调函数传入一个data参数。已知的事件列表见下方。
 *      mew.ws.remove(event,fn):传入事件id和回调函数，移除该事件下的该回调函数。
 *      mew.ws.close(reconnect):停止连接，并决定通过reconnect参数决定是否重连。默认重连。
 *      mew.ws.connect():连接到Websocket。
 *
 * mew.ws.on(event,fn)中event的已知值的列表：
 *      message_create, message_delete, user_typing, thought_engagement, thought_update, thought_delete,
 *      thought_create, thought_pin, thought_unpin, node_update, node_member_activity_change, node_member_update,
 *      node_member_ban, node_member_add, node_member_remove, topic_create, topic_update, topic_delete, topic_position,
 *      comment_engagement, comment_create, user_relationship_update, role_update, notification.
 * 各个事件的data的属性各有不同，但始终有一个event_type属性。
 * mew.version:只读属性，返回当前的Bettermew框架的版本（注意不是脚本的版本）
 *
 * MewPlugin.func_once_result:只读属性，存储了func_once的返回值。
 * MewPlugin(id,body):构造时传入插件的id和插件的body部分。
 *      id:字符串,
 *      body:{
 *          short_desc:字符串，该插件的短简介
 *          long_desc:字符串，该插件的长简介
 *          func_once:函数，插件启用时只运行一次的函数，其返回的值会被存储在MewPlugin.func_once_result中，不可使用箭头函数
 *          func_loop:函数，插件启用时dom树每更新一次就执行一次的函数，不可使用箭头函数
 *          *hide:布尔值，插件是否在设置页中可见
 *          *always:布尔值，插件是否始终启用
 *      }
 * MewPlugin.addConf(id,config):为插件添加一个设置项，可以用于存取数据。
 *      id:字符串,
 *      config:{
 *          type:字符串，text|switch|button|number|none，用于控制该设置项在设置页中的渲染类型。
 *          desc:字符串，该设置项的简介。
 *          *short_desc:字符串，当type为button时可用，按钮上的文字优先显示为此值。
 *          default:任意，该设置项的默认值。默认为空字符串，type为switch时默认为false。
 *          get:函数，当type为text时必须。文本框渲染时，其内容为该函数的返回值。
 *          set:函数，传入一个input事件。当type为text时必须。文本框文字发生改变时，该函数的返回值会作为本设置项的值被保存。
 *          max:数字，当type为number时，允许通过滑动条输入的最大值。
 *          click:函数，传入一个click事件。当type为button时必须。点击按钮时执行的函数。
 *      }
 * MewPlugin.configs:Map对象，存储了通过 MewPlugin.addConf() 添加的所有设置。其特殊之处在于重写了set()方法。
 * 可以通过 MewPlugin.configs.get("id") 获取完整的配置项。
 * 可以通过 MewPlugin.configs.get("id").value 获取该项配置的值。
 * 可以直接通过 MewPlugin.configs.set("id",value)修改值并保存，而无需set完整的配置项。value不存在时，将值修改为默认值。
 * 另有superset(id,config)方法，用于修改整个设置项。
 *
 * MewTool下面的静态方法：
 * dom(str):传入一段字符串，返回由该字符串解析而成的dom元素。
 * getreact(el):传入一个dom元素，返回其绑定的react数据。
 * loadcss(css,id):加载css字符串。如果有id则为该段css设置id。
 * getcookie(cname):传入cookie名，获取cookie值。
 * stdpage(el):传入一段字符串，返回一个“标准页面”。可以用返回值.apply()加载该标准页面。传入的字符串会被解析为dom元素。
 * async fetchres(url):从url获取文字信息。
 * template(str, data):传入模板和数据，返回填充好的数据。例子：MewTool.template("你好，{{$name}}", {name:"李华"});//预计返回 "你好，李华"
 * contextmenu(e, optionsMap):用于创建一个右键菜单。传入contextmenu事件e和含有菜单项的Map。该Map的键会被显示于菜单中；值会在菜单项被点击时被执行。传入click事件。
 * async imgurl2id(url):从图片hash值获取id。返回[id,hash]。获取id失败时，id为0。
 */