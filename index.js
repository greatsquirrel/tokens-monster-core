var q = Object.defineProperty;
var m = (n, s) => q(n, "name", { value: s, configurable: !0 });
var G = (n, s, t) => {
  if (!s.has(n))
    throw TypeError("Cannot " + t);
};
var y = (n, s, t) => {
  if (s.has(n))
    throw TypeError("Cannot add the same private member more than once");
  s instanceof WeakSet ? s.add(n) : s.set(n, t);
};
var g = (n, s, t) => (G(n, s, "access private method"), t);
const h = { id: "pf2e-tokens-monster-core", title: "Pathfinder Tokens: Monster Core", description: "<p>This all-in-one pack includes token artwork and portraits for the creatures in Pathfinder Second Edition's Monster Core!</p> <p>The tokens are lovingly handmade to make full use of FoundryVTT's features, and are seamlessly inserted into your system compendiums.</p>", manifest: "https://cdn.paizo.com/foundry/modules/pf2e-tokens-monster-core/module.json", url: "https://paizo.com/products/btq056kl?Pathfinder-Tokens-Monster-Core", version: "12.1.0", media: [{ type: "cover", url: "https://cdn.paizo.com/e7fd0eeb-9d7d-006b-7558-1a3e2f7bd8df/b49baa33-4a7f-4cd0-8970-faf3ca1f62b3/FVTT12003.jpg", loop: !1, flags: {} }, { type: "icon", url: "https://cdn.paizo.com/image/navigation/Nav-Logo-Global.png", loop: !1, flags: {} }], packs: [], scripts: [], esmodules: ["./index.js"], styles: ["./style.css"], authors: [{ name: "Paizo", url: "https://paizo.com/", flags: {} }], compatibility: { minimum: "12.330", verified: "12" }, relationships: { recommends: [{ id: "quick-insert", type: "module", manifest: "https://gitlab.com/fvtt-modules-lab/quick-insert/-/jobs/artifacts/master/raw/module.json?job=build-module", flags: { sigil: { devOnly: !0 } } }], systems: [{ id: "pf2e", manifest: "https://github.com/foundryvtt/pf2e/releases/latest/download/system.json", flags: { sigil: { localDevVersion: { distPath: "dist" }, devOnly: !0 } }, type: "system", compatibility: { minimum: "6.1.3", verified: "6.1.3" } }], requires: [] }, flags: { compendiumArtMappings: { archmage: { mapping: "modules/pf2e-tokens-monster-core/assets/archmage-map.json", credit: "<em>Portrait and token artwork by Paizo.</em>" }, dnd5e: { mapping: "modules/pf2e-tokens-monster-core/assets/dnd5e-map.json", credit: "<em>Portrait and token artwork by Paizo.</em>" }, shadowdark: { mapping: "modules/pf2e-tokens-monster-core/assets/shadowdark-map.json", credit: "<em>Portrait and token artwork by Paizo.</em>" }, swade: { mapping: "modules/pf2e-tokens-monster-core/assets/swpf-map.json", credit: "<em>Portrait and token artwork by Paizo.</em>" }, pf2e: { mapping: "modules/pf2e-tokens-monster-core/image-mapping.json", credit: "<em>Portrait and token artwork by Paizo.</em>" } }, sigil: { parent: "pf2e-tokens-monster-core", sheetClass: "MonsterCoreSheet" }, tokenRingSubjectMappings: { "modules/pf2e-tokens-monster-core/assets/tokens/": "modules/pf2e-tokens-monster-core/assets/subjects/" } }, protected: !0 }, u = h.id, J = h.version, b = h.flags?.sigil?.productTitle, R = h.flags?.sigil?.productSlug, f = h.flags?.sigil?.cssClass, A = h.flags?.sigil?.featureConfigurations, _ = h.flags?.sigil?.sheetClass, U = { packageId: "pf2e-tokens-monster-core" };
function B() {
  Hooks.once("init", async () => {
    const n = game.modules.filter(
      (s) => s.active && s.flags[u]?.adventureImporter
    );
    for (const s of n)
      game.settings.register(s.id, "firstStartup", {
        name: "One-Time Startup Prompt",
        scope: "world",
        config: !1,
        type: Boolean,
        default: !0
      });
    Hooks.on("updateSetting", (s) => {
      if (s.key === "core.moduleConfiguration")
        for (const t of n)
          game.settings.set(t.id, "firstStartup", !s.value[t.id]);
    });
  }), Hooks.on("ready", async () => {
    const n = game.modules.filter(
      (s) => s.active && s.flags[u]?.adventureImporter
    );
    for (const s of n)
      if (game.settings.get(s.id, "firstStartup") && game.user.isGM)
        for (const e of s.packs.filter((a) => a.type === "Adventure")) {
          const o = await game.packs.get(`${s.id}.${e.name}`).getDocuments();
          for (const r of o)
            r.sheet.render(!0);
        }
  }), Hooks.on("activateNote", function(n, s) {
    if (!n.entry)
      return;
    const e = n.document.flags.sigil?.scroll;
    e && (s.scrollTag = e);
  });
}
m(B, "adventures");
function V() {
  Hooks.once("init", () => {
    game.settings.register(u, "distraction-free", {
      name: "Distraction Free Mode",
      hint: "Replaces Journal borders with a less visually distracting style.",
      scope: "client",
      config: !0,
      type: Boolean,
      default: !1,
      onChange: (n) => {
        n ? document.querySelectorAll(`.journal-sheet.${f}-wrapper`).forEach((s) => s.classList.add("distraction-free")) : document.querySelectorAll(`.journal-sheet.${f}-wrapper`).forEach((s) => s.classList.remove("distraction-free"));
      }
    });
  });
}
m(V, "distractionFreeMode");
function K() {
  window.sigilMacros = window.sigilMacros ?? {}, window.sigilMacros[`${R.toLowerCase()}Macros`] = {
    async toggleTokens(n, s) {
      let t = !1, e;
      n.sceneId && ({ sceneId: n, ids: s, force: t, state: e } = n), await this.toggleDocumentHiddenState({
        sceneId: n,
        ids: s,
        type: "Token",
        force: t,
        state: e
      });
    },
    async toggleTiles(n, s) {
      let t = !1, e;
      n.sceneId && ({ sceneId: n, ids: s, force: t, state: e } = n), await this.toggleDocumentHiddenState({
        sceneId: n,
        ids: s,
        type: "Tile",
        force: t,
        state: e
      });
    },
    async toggleDoors(n, s) {
      let t = !1, e;
      n.sceneId && ({ sceneId: n, ids: s, force: t, state: e } = n), await this.toggleDocumentHiddenState({
        sceneId: n,
        ids: s,
        type: "Wall",
        force: t,
        state: e
      });
    },
    async toggleSounds(n, s) {
      let t = !1, e;
      n.sceneId && ({ sceneId: n, ids: s, force: t, state: e } = n), await this.toggleDocumentHiddenState({
        sceneId: n,
        ids: s,
        type: "AmbientSound",
        force: t,
        state: e
      });
    },
    async toggleLights(n, s) {
      let t = !1, e;
      n.sceneId && ({ sceneId: n, ids: s, force: t, state: e } = n), await this.toggleDocumentHiddenState({
        sceneId: n,
        ids: s,
        type: "AmbientLight",
        force: t,
        state: e
      });
    },
    async toggleRegions(n, s) {
      let t = !1, e;
      n.sceneId && ({ sceneId: n, ids: s, force: t, state: e, regionVisibility } = n), await this.toggleDocumentHiddenState({
        sceneId: n,
        ids: s,
        type: "Region",
        force: t,
        state: e,
        regionVisibility
      });
    },
    async playSound(n) {
      let s, t = !1;
      if (typeof n == "object" && ({ soundUuid: n = "", playing: s, stopAll: t } = n), t)
        for (const a of game.playlists.playing)
          await a.stopAll();
      const e = await fromUuid(n);
      e && (s ??= !e.playing, e.documentName === "PlaylistSound" && (s ? await e.parent.playSound(e) : await e.parent.stopSound(e)), e.documentName === "Playlist" && (s ? await e.playAll() : await e.stopAll()));
    },
    async changeScene({ sceneId: n, ambience: s, weather: t, darkness: e, force: a }) {
      if (canvas.scene.id === n || a) {
        const o = game.scenes.get(n);
        if (!o)
          return;
        const r = {};
        s && (r.playlistSound = o.playlistSound.id === s.ambienceId1 ? s.ambienceId2 : s.ambienceId1), t && (r.weather = o.weather === t.weatherId1 ? t.weatherId2 : t.weatherId1), e && (r.darkness = o.darkness === e.darknessValue1 ? e.darknessValue2 : e.darknessValue1), await o.update(r);
      }
    },
    // legacy call for changeScene
    async changeAmbience(n, s, t) {
      const e = {};
      n.sceneId ? e = n : e.sceneId = n, e.ambience ??= {}, e.ambience.ambienceId1 ??= s, e.ambience.ambienceId2 ??= t, await this.changeScene(e);
    },
    // legacy call for changeScene
    async changeWeather(n, s, t) {
      const e = {};
      n.sceneId ? e = n : e.sceneId = n, e.weather ??= {}, e.weather.weatherId1 ??= s, e.weather.weatherId2 ??= t, await this.changeScene(e);
    },
    async pickTileImage(n, s, t, e, a) {
      n.sceneId && ({ sceneId: n, tileId: s, title: t, prompt: e, tileOptions: a } = n);
      const o = `async function changeTileImage(img, sceneId, tileId) {
        await game.scenes.get(sceneId)?.tiles.get(tileId)?.update({ "texture.src": img });
      }`;
      async function r() {
        await new Promise(async (c) => {
          setTimeout(c, 200), await new Dialog(
            {
              title: t,
              content: i,
              buttons: { Close: { label: "Close" } }
            },
            { width: 300 }
          ).render(!0);
        });
      }
      m(r, "callTileMenu");
      let i = `<style>
      .mhmenumain {
          margin: 1px auto;
          background: url(systems/pf2e/assets/sheet/parchment.webp);
      }
      .mhmenu {
          margin: 1px auto;
          column-count: 1;
          column-width: auto;
      }
      .mhbutton {
          width: 100%;
          height: fit-content;
      }
      </style><script>${o}<\/script><div class="mhmenumain">`;
      i += `<p style="text-align:center;">${e}</p>`, a.forEach((c, d) => {
        i += `<button name="button${d}" class="mhbutton" type="button" onclick="changeTileImage('${c.img}','${n}','${s}')">${c.name}</button>`;
      }), i += "</div><br></div>", r();
    },
    async pickMacro({ title: n, prompt: s, macroOptions: t }) {
      const e = `async function callMacro(macro) {
        let pickedMacro = game.macros.find((m) => m.id === macro.id || (m.name === macro.macroName && m.folder?.id === macro.macroFolder));
        if (pickedMacro) {
          await pickedMacro.execute()
        }
      }`;
      async function a() {
        await new Promise(async (r) => {
          setTimeout(r, 200), await new Dialog(
            {
              title: n,
              content: o,
              buttons: { Close: { label: "Close" } }
            },
            { width: 300 }
          ).render(!0);
        });
      }
      m(a, "callMacroMenu");
      let o = `<style>
      .mhmenumain {
          margin: 1px auto;
          background: url(systems/pf2e/assets/sheet/parchment.webp);
      }
      .mhmenu {
          margin: 1px auto;
          column-count: 1;
          column-width: auto;
      }
      .mhbutton {
          width: 100%;
          height: fit-content;
      }
      </style><script>${e}<\/script><div class="mhmenumain">`;
      o += `<p style="text-align:center;">${s}</p>`, t.forEach((r, i) => {
        o += `<button name="button${i}" class="mhbutton" type="button" onclick="callMacro({macroName: '${r.macroName}', macroFolder: '${r.macroFolder}', id: '${r.id}'})">${r.name}</button>`;
      }), o += "</div><br></div>", a();
    },
    async moveTile(n, s, t) {
      let e;
      if (n.sceneId && ({ sceneId: n, tileId: s, states: t, force: e } = n), canvas.scene.id === n || e) {
        const a = game.scenes.get(n).tiles.get(s);
        let o = !0;
        Object.keys(t[0]).forEach((r) => {
          Object.keys(diffObject(a, t[0])).length > 0 && (o = !1);
        }), a.update(t[o ? 1 : 0]);
      }
    },
    async updateSceneChildDocuments({ sceneId: n, documentName: s, data: t, animate: e = !1 }) {
      let a;
      const o = game.scenes.get(n);
      switch (s) {
        case "Token":
          a = o.tokens;
          break;
        case "Wall":
          a = o.walls;
          break;
        case "AmbientLight":
          a = o.lights;
          break;
        case "Note":
          a = o.notes;
          break;
        case "Tile":
          a = o.tiles;
          break;
        case "AmbientSound":
          a = o.sounds;
          break;
        default:
          return;
      }
      const r = Object.entries(t).reduce((i, [c, d]) => (a.has(c) && i.push({ _id: c, ...d }), i), []);
      return canvas.scene.updateEmbeddedDocuments(s, r, { animate: e });
    },
    async changeToken(n, s, t) {
      let e, a;
      if (n.sceneId && ({ sceneId: n, tokenId: s, states: t, force: e, checkAlive: a } = n), canvas.scene.id === n || e) {
        const o = game.scenes.get(n), r = o.tokens.get(s) || o.tokens.getName(s);
        if (!r || t.length !== 2)
          return;
        if (t[0] = foundry.utils.expandObject(t[0]), t[1] = foundry.utils.expandObject(t[1]), a && game.system.id === "pf2e") {
          let l = !1;
          if (Array.isArray(a))
            for (const p of a)
              l = l || (await fromUuid(p))?.actor?.isDead;
          if (l = l || r.actor.isDead, l) {
            r.actor.update({ "system.attributes.hp.value": 0 });
            return;
          }
        }
        let i = !0;
        Object.keys(diffObject(r, t[0])).length > 0 && (i = !1);
        const { actor: c, ...d } = t[i ? 1 : 0];
        await r.update(d, { animate: !1 }), c && await r.actor.update(c);
      }
    },
    async toggleDocumentHiddenState({ sceneId: n, ids: s, type: t, force: e, state: a, regionVisibility: o }) {
      if (canvas.scene.id === n || e) {
        typeof s == "string" && (s = [s]);
        const { SECRET: r } = CONST.WALL_DOOR_TYPES, i = game.scenes.get(n);
        let c = [], d = [];
        switch (t) {
          case "Tile":
            c = i.tiles.filter((l) => s.includes(l.id)), d = c.map((l) => ({ _id: l.id, hidden: a === void 0 ? !l.hidden : a }));
            break;
          case "Token":
            c = i.tokens.filter((l) => s.includes(l.id)), d = c.map((l) => ({ _id: l.id, hidden: a === void 0 ? !l.hidden : a }));
            break;
          case "Wall":
            s[0] === "all" ? c = i.walls.filter((l) => l.door === r) : c = i.walls.filter((l) => s.includes(l.id)), d = c.map((l) => ({ _id: l.id, ds: a === void 0 ? l.ds === 1 ? 0 : 1 : a }));
            break;
          case "AmbientLight":
            c = i.lights.filter((l) => s.includes(l.id)), d = c.map((l) => ({ _id: l.id, hidden: a === void 0 ? !l.hidden : a }));
            break;
          case "AmbientSound":
            c = i.sounds.filter((l) => s.includes(l.id)), d = c.map((l) => ({ _id: l.id, hidden: a === void 0 ? !l.hidden : a }));
            break;
          case "Region":
            o = o ?? 2, c = i.regions.filter((l) => s.includes(l.id)), d = c.map((l) => ({
              _id: l.id,
              visibility: a === void 0 ? l.visibility ? 0 : o : a ? 0 : o,
              behaviors: l.behaviors.map((p) => ({
                _id: p._id,
                disabled: a === void 0 ? !p.disabled : a
              }))
            }));
            break;
          default:
            ui.notifications.warn("Attempting to change unknown Document Type");
        }
        d.length > 0 && await i.updateEmbeddedDocuments(t, d);
      }
    },
    async teleportDialog(n) {
      if (!n.data.token || !canvas.tokens.controlled.map((t) => t.document.id).includes(n.data.token.id))
        return;
      await Dialog.confirm({
        title: "Teleport",
        content: "Are you sure you want to teleport?"
      }) && await n.data.token.update({ elevation: -1 });
    }
  }, window.sigilMacros[`${U.productSlug.toLowerCase()}Macros`] = window.sigilMacros[`${R.toLowerCase()}Macros`];
}
m(K, "globalMacroHelpers");
function Y() {
  Hooks.once("init", () => {
    game.settings.register(u, "safe-journal", {
      name: "Journal Freeze Workaround",
      hint: "Workaround for a Chrome issue that can cause all journals to freeze under certain circumstances.",
      scope: "client",
      config: !0,
      type: Boolean,
      default: !1,
      onChange: (n) => {
        n ? document.querySelectorAll(`.journal-sheet.${f}-wrapper`).forEach((s) => s.classList.add("safe-journal")) : document.querySelectorAll(`.journal-sheet.${f}-wrapper`).forEach((s) => s.classList.remove("safe-journal"));
      }
    });
  });
}
m(Y, "safeJournalMode");
const Q = {
  adventures: B,
  "distraction-free-mode": V,
  "global-macro-helpers": K,
  "safe-journal-mode": Y
};
for (const [n, s] of Object.entries(Q))
  A?.[n] && s();
const X = "modules/pf2e-tokens-monster-core/templates/importer.hbs";
var S, x, T, F;
const N = class N extends AdventureImporter {
  /**
   *  Add adventure stuff
   * @param {Adventure} adventure
   * @param {object} options
   */
  constructor(t, e) {
    super(t, e);
    /* -------------------------------------------- */
    /**
     * Handle toggling the import all checkbox.
     * @param {Event} event  The change event.
     */
    y(this, S);
    /**
     * Handle toggling the don't show again checkbox.
     * @param {Event} event  The change event.
     */
    y(this, T);
    this.options.classes.push(f);
    const a = game.modules.get(this.adventure.compendium.metadata.packageName), {
      initialSceneId: o,
      initialJournalEntryId: r,
      initialJournalPageId: i,
      initialLoginScreenBackground: c,
      chatMessage: d
    } = a.flags?.[u]?.adventureImporter?.[this.adventure.uuid] || {};
    this.importOptions = {}, o && (this.importOptions.activateScene = {
      label: "Activate Initial Scene",
      default: !0,
      handler: () => game.scenes.get(o)?.activate()
    }), r && i && (this.importOptions.displayJournal = {
      label: "Display Introduction Journal Entry",
      default: !0,
      handler: () => {
        game.journal.get(r).sheet.render(!0, { pageId: i });
      }
    }), c && (this.importOptions.customizeJoin = {
      label: "Style Login Screen",
      default: !1,
      handler: async () => {
        const l = {
          id: game.world.id,
          action: "editWorld",
          description: a.description,
          background: `modules/${a.id}/${c}`
        }, p = await foundry.utils.fetchJsonWithTimeout(
          foundry.utils.getRoute("setup"),
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(l)
          }
        );
        game.world.updateSource(p);
      }
    }), d?.label && d?.content && (this.importOptions.chatMessage = {
      label: d.label,
      default: !0,
      handler: () => {
        ChatMessage.create({
          content: d.content,
          whisper: ChatMessage.getWhisperRecipients("GM")
        });
      }
    });
  }
  /**
   *
   */
  get template() {
    return X;
  }
  /* -------------------------------------------- */
  /** @inheritDoc */
  async getData(t = {}) {
    const e = await super.getData(), a = game.modules.get(this.adventure.compendium.metadata.packageName);
    return e.importOptions = this.importOptions || {}, e.hasImportOptions = Object.keys(e.importOptions).length > 0, e.dontShowAgain = !game.settings.get(a.id, "firstStartup"), e.changelog = a.changelog, e;
  }
  /* -------------------------------------------- */
  /** @inheritDoc */
  activateListeners(t) {
    super.activateListeners(t);
    const e = t[0];
    e.querySelectorAll('input[value="all"]').forEach(
      (a) => a.addEventListener("change", (o) => {
        g(this, S, x).call(this, o);
      })
    ), e.querySelectorAll('input[name="dontShowAgain"]').forEach(
      (a) => a.addEventListener("change", (o) => {
        g(this, T, F).call(this, o);
      })
    ), e.querySelectorAll(".changelog-link").forEach(
      (a) => a.addEventListener("click", (o) => {
        o.preventDefault(), o.stopPropagation();
        const i = game.modules.get(this.adventure.compendium.metadata.packageName).changelog;
        window.open(i, "_blank").focus();
      })
    );
  }
  /* -------------------------------------------- */
  /**
   * Prepare a list of content types provided by this adventure.
   * @returns {{icon: string, label: string, count: number}[]} array of document types, names, and icons.
   * @protected
   */
  _getContentList() {
    return Object.entries(Adventure.contentFields).reduce((t, [e, a]) => {
      const o = this.adventure[e].size;
      return o && t.push({
        field: e,
        icon: CONFIG[a.documentName].sidebarIcon,
        label: game.i18n.localize(o > 1 ? a.metadata.labelPlural : a.metadata.label),
        count: o
      }), t;
    }, []);
  }
  /* -------------------------------------------- */
  /** @inheritDoc */
  async _prepareImportData(t) {
    this.submitOptions = t;
    const { toCreate: e, toUpdate: a, documentCount: o } = await super._prepareImportData(t);
    return this.applyImportControls(t, e, a), "Scene" in e && await this.mergeCompendiumScenes(e.Scene), "Scene" in a && await this.mergeCompendiumScenes(a.Scene), { toCreate: e, toUpdate: a, documentCount: o };
  }
  /* -------------------------------------------- */
  /** @inheritDoc */
  async _importContent(t, e, a) {
    const o = await super._importContent(t, e, a);
    for (const [i, c] of Object.entries(this.importOptions ?? {}))
      !c.handler || !this.submitOptions[i] || await c.handler();
    const r = game.modules.get(this.adventure.compendium.metadata.packageName);
    return game.settings.set(r.id, "firstStartup", !1), o;
  }
  /* -------------------------------------------- */
  /**
   *
   * @param scenes
   */
  async mergeCompendiumScenes(t) {
    const e = game.settings.get("core", "defaultToken");
    for (const a of t)
      for (let o of a.tokens)
        o = Object.assign(o, foundry.utils.mergeObject(o, e));
  }
  /* -------------------------------------------- */
  /**
   * Remove adventure content that the user indicated they did not want to import.
   * @param {object} formData  The submitted adventure form data.
   * @param {object} toCreate  An object of document data to create.
   * @param {object} toUpdate  An object of document data to update.
   */
  applyImportControls(t, e, a) {
    const o = t.importFields.filter((i) => i);
    if (o.push("folders"), !o || !Array.isArray(o) || o.some((i) => i === "all"))
      return;
    const r = new Set(o.map((i) => Adventure.contentFields[i].documentName));
    [e, a].forEach((i) => {
      for (const c of Object.keys(i))
        r.has(c) || delete i[c];
      i.Folder && (i.Folder = i.Folder.filter((c) => r.has(c.type)));
    });
  }
};
S = new WeakSet(), x = /* @__PURE__ */ m(function(t) {
  const e = t.currentTarget, a = e.closest(".import-controls"), o = e.checked;
  a.querySelectorAll("input").forEach((r) => {
    r.value !== "folders" && (r.disabled = o), o && (r.checked = !0);
  }), e.disabled = !1;
}, "#onToggleImportAll"), T = new WeakSet(), F = /* @__PURE__ */ m(function(t) {
  const a = t.currentTarget.checked, o = game.modules.get(this.adventure.compendium.metadata.packageName);
  game.settings.set(o.id, "firstStartup", !a);
}, "#onToggleDontShowAgain"), m(N, "SigilAdventureImporter");
let D = N;
var k, M, O, W, j, H;
const P = class P extends D {
  /**
   *  Add adventure stuff
   *
   * @param {Adventure} adventure
   * @param {object} options
   */
  constructor(t, e) {
    super(t, e);
    /* -------------------------------------------- */
    /**
     * Merge Actor data with authoritative source data from system compendium packs
     *
     * @param {Actor[]} actors        Actor documents intended to be imported
     * @param {object} importOptions  Form submission import options
     * @returns {Promise<void>}
     */
    y(this, k);
    y(this, O);
    y(this, j);
    this.options.classes.push(f);
    const a = game.modules.get(this.adventure.compendium.metadata.packageName), { additionalItems: o, removeItems: r, partyToken: i } = a.flags?.[u]?.adventureImporter?.[this.adventure.uuid] || {};
    this.additionalItems = o ?? {}, this.removeItems = r ?? {}, i && (this.importOptions.partyToken = {
      label: "Use Adventure Party Token",
      default: !1,
      handler: () => game.actors.party?.update({ img: i })
    });
  }
  /* -------------------------------------------- */
  /** @inheritDoc */
  async _prepareImportData(t) {
    this.submitOptions = t;
    const { toCreate: e, toUpdate: a, documentCount: o } = await super._prepareImportData(t);
    return this.applyImportControls(t, e, a), "Actor" in e && await g(this, k, M).call(this, e.Actor), "Actor" in a && await g(this, k, M).call(this, a.Actor), "Scene" in e && await this.mergeCompendiumScenes(e.Scene), "Scene" in a && await this.mergeCompendiumScenes(a.Scene), { toCreate: e, toUpdate: a, documentCount: o };
  }
};
k = new WeakSet(), M = /* @__PURE__ */ m(async function(t) {
  for (let e of t) {
    const [, a, o, r, i] = e.flags?.core?.sourceId?.split?.(".") ?? [], c = game.packs.get(`${a}.${o}`);
    if (!c?.index?.has?.(i || r)) {
      c && console.warn(
        `[${a}] Compendium source data for "${e.name}" [${e._id}] not found in pack ${c?.collection}`
      );
      continue;
    }
    const d = await c.getDocument(i), l = d.toObject(), p = (l.items ?? []).filter(g(this, O, W).bind(this, e._id));
    await g(this, j, H).call(this, e._id, p), d.type === "npc" && (e = Object.assign(
      e,
      foundry.utils.mergeObject(l, {
        folder: e.folder,
        img: e.img,
        items: p,
        name: e.name,
        "prototypeToken.name": e.prototypeToken?.name,
        "prototypeToken.texture": e.prototypeToken?.texture,
        "prototypeToken.randomImg": e.prototypeToken?.randomImg,
        "prototypeToken.flags.pf2e": e.prototypeToken?.flags?.pf2e,
        "system.attributes.adjustment": e.system.attributes?.adjustment,
        "system.details.blurb": e.system.details?.blurb,
        "system.attributes.hp.value": e.system.attributes?.hp?.value,
        "system.details.languages.value": e.system.details?.languages?.value,
        "system.traits.value": e.system.traits?.value,
        "system.traits.size": e.system.traits?.size,
        _id: e._id
      })
    )), d.type === "hazard" && (e = Object.assign(
      e,
      foundry.utils.mergeObject(l, {
        folder: e.folder,
        img: e.img,
        items: p,
        name: e.name,
        "prototypeToken.name": e.prototypeToken?.name,
        "prototypeToken.texture": e.prototypeToken?.texture,
        "prototypeToken.width": e.prototypeToken?.width,
        "prototypeToken.height": e.prototypeToken?.height,
        "system.traits.value": e.system.traits?.value,
        _id: e._id
      })
    )), d.type === "vehicle" && (e = Object.assign(
      e,
      foundry.utils.mergeObject(l, {
        folder: e.folder,
        img: e.img,
        items: p,
        name: e.name,
        "prototypeToken.name": e.prototypeToken?.name,
        "prototypeToken.texture": e.prototypeToken?.texture,
        "prototypeToken.width": e.prototypeToken?.width,
        "prototypeToken.height": e.prototypeToken?.height,
        _id: e._id
      })
    ));
  }
}, "#mergeCompendiumActors"), O = new WeakSet(), W = /* @__PURE__ */ m(function(t, e) {
  return !this.removeItems[t]?.some((a) => a.id === e._id) || !this.removeItems[t]?.some((a) => a.name === e.name);
}, "#filterItems"), j = new WeakSet(), H = /* @__PURE__ */ m(async function(t, e) {
  const a = this.additionalItems[t] ?? [], o = e.map((r) => r._id);
  for (const r of a) {
    const i = (await fromUuid(r)).toObject();
    for (; o.includes(i._id); )
      i._id = randomID();
    i.flags = i.flags ?? {}, i.flags.core = i.flags.core ?? {}, i.flags.core.sourceId = i.flags.core.sourceId ?? r, i.flags.core.sourceId = r, o.push(i._id), e.push(i);
  }
}, "#addItems"), m(P, "SigilPF2EAdventureImporter");
let E = P;
Hooks.once("init", () => {
  DocumentSheetConfig.registerSheet(Adventure, u, E, {
    label: `${b} Importer`,
    makeDefault: !1
  });
});
const z = class z extends JournalImagePageSheet {
};
m(z, "SigilJournalSheetImagePage");
let w = z;
const Z = "modules/pf2e-tokens-monster-core/templates/dialog-show.hbs", ee = "modules/pf2e-tokens-monster-core/templates/page-edit.hbs", te = "modules/pf2e-tokens-monster-core/templates/page-view.hbs", $ = class $ extends JournalTextPageSheet {
  /**
   *
   */
  get template() {
    return this.isEditable ? ee : te;
  }
  /**
   *
   * @param doc
   * @param whisperContent
   */
  async showWhisperDialog(s, t) {
    if (!(s instanceof JournalEntry || s instanceof JournalEntryPage))
      return;
    if (!s.isOwner)
      return ui.notifications.error("JOURNAL.ShowBadPermissions", {
        localize: !0
      });
    if (game.users.size < 2)
      return ui.notifications.warn("JOURNAL.ShowNoPlayers", {
        localize: !0
      });
    const e = game.users.filter((o) => o.id !== game.userId), a = await renderTemplate(Z, { users: e });
    return Dialog.prompt({
      // title: game.i18n.format("JOURNAL.ShowEntry", {name: doc.name}),
      // label: game.i18n.localize("JOURNAL.ActionShow"),
      title: "Whisper Selected Content to...",
      label: "Whisper to Selected Players",
      content: a,
      render: (o) => {
        const r = o.querySelector("form");
        r.elements.allPlayers.addEventListener("change", (i) => {
          const c = i.currentTarget.checked;
          r.querySelectorAll('[name="players"]').forEach((d) => {
            d.checked = c, d.disabled = c;
          });
        });
      },
      callback: async (o) => {
        const r = o.querySelector("form"), i = new FormDataExtended(r).object, c = i.allPlayers ? game.users.filter((l) => !l.isSelf) : i.players.reduce((l, p) => {
          const I = game.users.get(p);
          return I && !I.isSelf && l.push(I), l;
        }, []);
        if (!c.length)
          return;
        const d = c.map((l) => l.id);
        return ChatMessage.create({
          whisper: d,
          content: t
        });
      },
      rejectClose: !1,
      options: { jQuery: !1 }
    });
  }
  /**
   *
   * @param event
   */
  async _onClickReadAloud(s) {
    if (s.preventDefault(), ["IMG", "A"].includes(s.target.tagName))
      return;
    const e = `<div data-sigil-chatable>${s.currentTarget.innerHTML}</div>`;
    this.showWhisperDialog(this.object.parent, e);
  }
  /**
   *
   * @param event
   */
  async _onClickContentLink(s) {
    s.preventDefault();
    const t = s.currentTarget;
    if (!t.dataset.uuid.startsWith("Scene"))
      return;
    const e = game.scenes.get(t.dataset.id);
    e && (s.stopPropagation(), e.view(), e.journal?.sheet?.render(!0, { pageId: e.journalEntryPage }));
  }
  /**
   *
   * @param html
   */
  activateListeners(s) {
    super.activateListeners(s), s[0].querySelectorAll(".read-aloud").forEach((t) => {
      t.addEventListener("click", this._onClickReadAloud.bind(this));
    }), game.user.isGM && s[0].querySelectorAll("a.content-link[type=Scene]").forEach((t) => {
      t.addEventListener("click", this._onClickContentLink.bind(this));
    }), this?.document?.parent?.flags?.sigil?.variations && s[0].querySelectorAll("[data-option][data-variation]").forEach((t) => {
      const e = t.dataset.variation, a = t.dataset.option, o = this.document.parent.flags.sigil.variations.find(
        (r) => r.name === e
      )?.option;
      o && a !== o && (t.style.display = "none");
    });
  }
};
m($, "SigilJournalSheetPage");
let v = $;
const se = "modules/pf2e-tokens-monster-core/templates/journal.hbs", L = class L extends JournalSheet {
  /**
   *
   */
  static get defaultOptions() {
    const s = {
      classes: ["sheet", "journal-sheet", "journal-entry", `${f}-wrapper`],
      width: window.innerWidth < 800 ? 720 : 960,
      height: window.innerHeight < 1e3 ? 700 : 800
    };
    return A?.["distraction-free-mode"] && game.settings.get(u, "distraction-free") && s.classes.push("distraction-free"), A?.["safe-journal-mode"] && game.settings.get(u, "safe-journal") && s.classes.push("safe-journal"), foundry.utils.mergeObject(super.defaultOptions, s);
  }
  /**
   *
   */
  get template() {
    return se;
  }
  /**
   *
   * @param options
   */
  getData(s) {
    const t = super.getData(s);
    t.cssClass = f;
    let e = this?.document?.flags?.sigil?.additionalCssClass;
    return typeof e == "string" && (e = e.split(" ")), Array.isArray(e) && (typeof this?.document?.flags[u]?.additionalCssClass == "string" && e.push(this.document.flags[u].additionalCssClass.split(" ")), typeof this?.document?.flags[u]?.additionalCssClass == "string" && e.push(this.document.flags[u].additionalCssClass.split(" ")), Array.isArray(this?.document?.flags[u]?.additionalCssClass) && e.push(this.document.flags[u].additionalCssClass), e && (t.cssClass = [f, ...e].join(" "))), t;
  }
  /**
   *
   */
  _getPageData() {
    let s = 1;
    return super._getPageData().map((t) => (t?.flags[u]?.pageNumber ? (t.number = t.flags[u].pageNumber, typeof t?.flags[u]?.pageNumber == "number" && (s = t.number + 1)) : t.number = s++, t?.flags[u]?.pageNumberClass && (t.pageNumberClass = t.flags[u].pageNumberClass ?? ""), t.editable = t.editable && t?.flags[u]?.editable, t.cssClasses = [
      this.cssClass,
      t?.flags?.sigil?.additionalCssClass,
      t.flags[u]?.additionalCssClass
    ].join(" "), t));
  }
  /**
   *
   * @param pageNode
   * @param toc
   */
  async _renderHeadings(s, t) {
    return Object.entries(t || {}).forEach(([e, a]) => {
      a.element.classList.contains("no-toc") && delete t[e];
      const o = a.element?.querySelectorAll("span");
      o.length > 0 && (a.text = o[0].textContent);
    }), await super._renderHeadings(s, t);
  }
  /**
   *
   * @param event
   */
  _onResizeMouseDown(s) {
    this._chromeShapeOutsideFreezeWorkaround(!0);
  }
  /**
   *
   * @param event
   */
  _onResize(s) {
    this._onResizeMouseUp(s);
  }
  /**
   *
   * @param event
   */
  _onResizeMouseUp(s) {
    this._chromeShapeOutsideFreezeWorkaround(!1);
  }
  /**
   *
   * @param toggle
   */
  _chromeShapeOutsideFreezeWorkaround(s) {
    this.element[0].classList[s ? "add" : "remove"]("resizing");
  }
  /**
   *
   */
  async minimize() {
    !this.rendered || !this.popOut || [!0, null].includes(this._minimized) || (this._chromeShapeOutsideFreezeWorkaround(!0), await super.minimize());
  }
  /**
   *
   */
  async maximize() {
    !this.popOut || [!1, null].includes(this._minimized) || (await super.maximize(), this._chromeShapeOutsideFreezeWorkaround(!1));
  }
  /**
   *
   */
  async close() {
    !this.rendered || !this.popOut || [!0, null].includes(this._minimized) || (this._chromeShapeOutsideFreezeWorkaround(!0), await super.close());
  }
  /**
   *
   */
  async _renderOuter() {
    const s = await super._renderOuter();
    return s.find("div.window-resizable-handle")[0].addEventListener("pointerdown", this._onResizeMouseDown.bind(this)), s;
  }
  /** @override */
  async _render(s = !1, t = {}) {
    let e = this?.document?.flags?.sigil?.additionalCssClass ?? this?.document?.flags[u]?.additionalCssClass;
    if (typeof e == "string" && (e = e.split(" ")), t.classes = t.classes || this.constructor.defaultOptions.classes, Array.isArray(e))
      for (const a of e)
        t.classes.includes(a + "-wrapper") || t.classes.push(a + "-wrapper");
    if (t.action === "update" && this._state !== Application.RENDER_STATES.NONE && JSON.stringify(this.options.classes) !== JSON.stringify(t.classes))
      return this.close();
    if (await super._render(s, t), "scrollTag" in t) {
      this._scrollPositions ??= {};
      const a = this._scrollPositions[".scrollable"] ??= [], o = this.element[0].querySelector(`[data-scroll='${t.scrollTag}']`)?.offsetTop;
      if (!o)
        return;
      a.length ? a[1] = o : a.push(0, o), this._restoreScrollPositions(this.element);
    }
  }
};
m(L, "SigilJournalSheet");
let C = L;
Hooks.once("init", () => {
  Object.defineProperty(C, "name", {
    value: `${_}`
  }), Object.defineProperty(v, "name", {
    value: `${_}Page`
  }), Object.defineProperty(w, "name", {
    value: `${_}ImagePage`
  }), DocumentSheetConfig.registerSheet(JournalEntry, u, C, {
    types: ["base"],
    makeDefault: !1,
    canBeDefault: !1,
    label: `${b}`
  }), DocumentSheetConfig.registerSheet(JournalEntryPage, u, v, {
    types: ["text"],
    makeDefault: !1,
    canBeDefault: !1,
    label: `${b}`
  }), DocumentSheetConfig.registerSheet(JournalEntryPage, u, w, {
    types: ["image"],
    makeDefault: !1,
    canBeDefault: !1,
    label: `${b}`
  });
});
Hooks.on("initializeDynamicTokenRingConfig", (n) => {
  const s = new foundry.canvas.tokens.DynamicRingData({
    label: "Monster Core Ring",
    effects: {
      RING_PULSE: "TOKEN.RING.EFFECTS.RING_PULSE",
      RING_GRADIENT: "TOKEN.RING.EFFECTS.RING_GRADIENT",
      BKG_WAVE: "TOKEN.RING.EFFECTS.BKG_WAVE",
      INVISIBILITY: "TOKEN.RING.EFFECTS.INVISIBILITY"
    },
    spritesheet: "modules/pf2e-tokens-monster-core/assets/ring/sprite-sheet.json"
  });
  n.addConfig("monsterCoreToken", s);
});
console.log(`[${u}@${J}...] successfully loaded!`);
