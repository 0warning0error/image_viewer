function Picture(c, f, l) {
	function F(a) {
		a = na;
		var b = oa,
			g = n.width,
			h = n.height;
		H(-g / 2, -h / 2);
		a < g || b < h ? (aa = 'url("' + chrome.runtime.getURL("/images/hand_grab.cur") + '"), move', L ? (b < g ? (U = -h / 2 - (g - b) / 2, V = -h / 2 + (g - b) / 2) : U = V = ba, a < h ? (W = -g / 2 - (h - a) / 2, X = -g / 2 + (h - a) / 2) : W = X = Y) : (a < g ? (W = -g + a / 2, X = -a / 2) : W = X = Y, b < h ? (U = -h + b / 2, V = -b / 2) : U = V = ba)) : aa = "";
		n.style.cursor = aa
	}
	function H(a, b) {
		Y = a;
		ba = b;
		n.style.transform = "translate(" + Y + "px, " + ba + "px) rotate(" + ca + "deg)"
	}
	function B() {
		var a = na = window.innerWidth,
			b = oa = window.innerHeight - pa,
			g = d.getElement().parentNode;
		return 0 >= w || 0 >= x ? void console.error("图片加载异常") : void("view" === Z ? (da || (a < w || b < x ? (a / b < T ? (n.width = L ? a / T : a, n.height = L ? a : a / T) : (n.width = L ? b : b * T, n.height = L ? b * T : b), p = L ? n.width / x : n.width / w, p = Math.round(100 * p)) : (p = 100, n.width = L ? x : w, n.height = L ? w : x)), F(), g.classList.add("normal"), document.documentElement.style.overflow = "hidden") : "edit" === Z && (a < w || b < x ? (g.classList.remove("normal"), document.documentElement.style.overflow = "auto", a > w && (g.style.marginLeft = (a - w) / 2 + "px"), b > x && (g.style.marginTop = (b - x) / 2 + "px")) : (g.classList.add("normal"), document.documentElement.style.overflow = "hidden")))
	}
	function Q(a) {
		var b = qa + a.pageX - ra;
		a = sa + a.pageY - ta;
		b < W ? b = W : b > X && (b = X);
		a < U ? a = U : a > V && (a = V);
		H(b, a)
	}
	function u(a) {
		f || (a.crossOrigin = "Anonymous");
		ja.id = "canvas";
		ja.width = a.width;
		ja.height = a.height;
		document.body.appendChild(ja);
		window.canvast = d = new fabric.Canvas("canvas", {
			selection: !1
		});
		d.getElement().parentNode.style.display = "none";
		ua = new fabric.PencilBrush(d);
		ka = new fabric.PatternBrush(d);
		ka.getPatternSrc = function() {
			var g = fabric.document.createElement("canvas");
			g.width = g.height = 10;
			var h = g.getContext("2d");
			return h.strokeStyle = this.color, h.lineWidth = 20, h.globalAlpha = .5, h.beginPath(), h.moveTo(0, 0), h.lineTo(10, 10), h.closePath(), h.stroke(), g
		};
		new fabric.PatternBrush(d);
		ea = new fabric.PatternBrush(d);
		var b = new Image();
		b.src = a.src;
		b.style.display = "none"
		console.log(b)
		b.onload = function(){
			d.add(new fabric.Image(b, {
				name: "bg",
				selectable: !1,
				hoverCursor: "default"
			}));
		}
		document.body.appendChild(b)
		d.on("mouse:down", function(g) {
			var h, v = 5 + I,
				z, G, t, A, k = {};
			if (e = d.getActiveObject(), e ? J("update", e) : h = va(), !e && C) switch (k.x = g.e.offsetX, k.y = g.e.offsetY, fa && (k = fabric.util.transformPoint(k, fa)), C) {
			case "line":
				e = new fabric.Line([k.x, k.y, k.x, k.y], {
					strokeWidth: I,
					stroke: M,
					originX: "center",
					originY: "center",
					strokeLineCap: "round",
					perPixelTargetFind: !0,
					hasControls: !1,
					id: h
				});
				d.add(e);
				break;
			case "arrow":
				e = new fabric.Arrow([k.x, k.y, k.x, k.y], {
					strokeWidth: I,
					stroke: M,
					originX: "center",
					originY: "center",
					strokeLineCap: "round",
					perPixelTargetFind: !0,
					hasControls: !1,
					id: h
				});
				d.add(e);
				break;
			case "rect":
				e = new fabric.Rect({
					left: k.x,
					top: k.y,
					width: 0,
					height: 0,
					fill: "transparent",
					strokeWidth: I,
					stroke: M,
					perPixelTargetFind: !0,
					vertexX: k.x,
					vertexY: k.y,
					id: h
				});
				d.add(e);
				break;
			case "circle":
				e = new fabric.Circle({
					left: k.x,
					top: k.y,
					radius: 0,
					fill: "transparent",
					strokeWidth: I,
					stroke: M,
					perPixelTargetFind: !0,
					vertexX: k.x,
					vertexY: k.y,
					id: h
				});
				d.add(e);
				break;
			case "ellipse":
				e = new fabric.Ellipse({
					left: k.x,
					top: k.y,
					rx: 0,
					ry: 0,
					fill: "transparent",
					strokeWidth: I,
					stroke: M,
					perPixelTargetFind: !0,
					vertexX: k.x,
					vertexY: k.y,
					id: h
				});
				d.add(e);
				break;
			case "text":
				e = new fabric.IText("", {
					left: k.x,
					top: k.y,
					fontFamily: wa,
					fontStyle: xa,
					strokeWidth: I,
					fill: M,
					fontSize: ya,
					lineHeight: 1.2,
					padding: 7,
					styles: {},
					id: h
				}), d.add(e), d.setActiveObject(e), e.on("editing:entered", function() {
					(this.originText = this.text) && J("update", this);
					C = ""
				}), e.on("editing:exited", function() {
					(this.text = this.text.trim()) ? this.originText ? ha(this) : (J("remove", this), ha(this)) : this.originText ? (J("add", this), ha(this)) : this.remove();
					N && setTimeout(function() {
						C = N
					}, 200)
				}), e.enterEditing()
			} else e && /arrow|line/.test(e.type) ? (z = e.left + e.width / 2 * (e.x1 < e.x2 ? -1 : 1), G = e.left + e.width / 2 * (e.x1 < e.x2 ? 1 : -1), t = e.top + e.height / 2 * (e.y1 < e.y2 ? -1 : 1), A = e.top + e.height / 2 * (e.y1 < e.y2 ? 1 : -1), k.x = g.e.offsetX, k.y = g.e.offsetY, fa && (k = fabric.util.transformPoint(k, fa)), Math.abs(k.x - z) < v && Math.abs(k.y - t) < v ? e.endPoint = 1 : Math.abs(k.x - G) < v && Math.abs(k.y - A) < v && (e.endPoint = 2), e.set({
				x1: z,
				y1: t,
				x2: G,
				y2: A
			}), C = e.endPoint ? e.type : "") : e && (C = "")
		});
		d.on("mouse:move", function(g) {
			if (e) switch (g = d.getPointer(g.e), C) {
			case "arrow":
			case "line":
				if (e.endPoint) {
					var h = {};
					h["x" + e.endPoint] = g.x;
					h["y" + e.endPoint] = g.y;
					e.set(h)
				} else e.set({
					x2: g.x,
					y2: g.y
				});
				e.setCoords();
				d.renderAll();
				break;
			case "":
				e.setCoords();
				break;
			case "rect":
				e.set({
					width: Math.abs(g.x - e.vertexX),
					height: Math.abs(g.y - e.vertexY),
					left: Math.min(g.x, e.vertexX),
					top: Math.min(g.y, e.vertexY)
				});
				e.setCoords();
				d.renderAll();
				break;
			case "circle":
				e.set({
					radius: Math.abs(g.x - e.vertexX) / 2,
					left: Math.min(g.x, e.vertexX),
					top: Math.min(g.y, e.vertexY)
				});
				e.setCoords();
				d.renderAll();
				break;
			case "ellipse":
				e.set({
					rx: Math.abs(g.x - e.vertexX) / 2,
					ry: Math.abs(g.y - e.vertexY) / 2,
					left: Math.min(g.x, e.vertexX),
					top: Math.min(g.y, e.vertexY)
				}), e.setCoords(), d.renderAll()
			}
		});
		d.on("mouse:up", function(g) {
			if (d.isDrawingMode) return g = d.item(d.getObjects().length - 1), J("remove", g), void ha(g);
			if (e) {
				switch (C) {
				case "arrow":
				case "line":
					e.endPoint ? e.endPoint = 0 : e.x1 === e.x2 && e.y1 === e.y2 ? e.remove() : J("remove", e);
					break;
				case "rect":
					3 > e.width && 3 > e.height ? e.remove() : J("remove", e);
					break;
				case "circle":
					3 > e.radius ? e.remove() : J("remove", e);
					break;
				case "ellipse":
					3 > e.rx && 3 > e.ry ? e.remove() : J("remove", e)
				}
				e.isEditing || (C = N, ha(e));
				e = null
			}
		});
		d.on("object:selected", function(g) {
			d.getActiveObject()
		})
	}
	function r(a) {
		var b, g, h, v = a.data,
			z = a.width,
			G = a.height,
			t = [],
			A = 0,
			k = 1 >= arguments.length ? void 0 : arguments[1];
		var m = 2 >= arguments.length ? void 0 : arguments[2];
		k = Math.floor(k) || 3;
		m = m || k / 3;
		var K = 1 / (Math.sqrt(2 * Math.PI) * m);
		var R = -1 / (2 * m * m);
		m = 0;
		for (b = -k; b <= k; b++, m++) {
			var O = K * Math.exp(R * b * b);
			t[m] = O;
			A += O
		}
		m = 0;
		for (b = t.length; m < b; m++) t[m] /= A;
		for (K = 0; K < G; K++) for (b = 0; b < z; b++) {
			A = g = O = R = 0;
			for (h = -k; h <= k; h++) {
				var S = b + h;
				0 <= S && S < z && (m = 4 * (K * z + S), g += v[m] * t[h + k], O += v[m + 1] * t[h + k], R += v[m + 2] * t[h + k], A += t[h + k])
			}
			m = 4 * (K * z + b);
			v[m] = g / A;
			v[m + 1] = O / A;
			v[m + 2] = R / A
		}
		for (b = 0; b < z; b++) for (K = 0; K < G; K++) {
			A = g = O = R = 0;
			for (h = -k; h <= k; h++) S = K + h, 0 <= S && S < G && (m = 4 * (S * z + b), g += v[m] * t[h + k], O += v[m + 1] * t[h + k], R += v[m + 2] * t[h + k], A += t[h + k]);
			m = 4 * (K * z + b);
			v[m] = g / A;
			v[m + 1] = O / A;
			v[m + 2] = R / A
		}
		return a
	}
	function E() {
		C = N = ""
	}
	function y() {
		var a;
		
		d.isDrawingMode && (a = d.getObjects().slice(), a.forEach(function(b) {
			"path" === b.type && (b.perPixelTargetFind = !0, b.hasControls = !1)
		}), d.isDrawingMode = !1)
	}
	function J(a, b) {
		b.id || (b.id = va());
		D.push({
			cmd: a,
			data: za(b)
		})
	}
	function ha(a) {
		var b = D[D.length - 1];
		null != b && b.data.id === a.id && ("remove" === b.cmd ? (b.data = za(a), Aa()) : "add" === b.cmd ? Aa() : "update" === b.cmd && JSON.stringify(a.toJSON()) === JSON.stringify(b.data.toJSON()) && D.pop(), q && (q("undo", !! D.length), q("clear", !! D.length)))
	}
	function Aa() {
		P = [];
		q && q("restore", !! P.length)
	}
	function va() {
		for (var a = "", b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy" + Date.now(), g = 0; 12 > g; g++) a += b.charAt(Math.floor(Math.random() * b.length));
		return a
	}
	function za(a) {
		var b = a.clone();
		return "perPixelTargetFind hasControls hasBorders x1 y1 x2 y2 id endPoint".split(" ").map(function(g) {
			void 0 !== a[g] && (b[g] = a[g])
		}), b
	}
	var q = null,
		Z = "view",
		Ba = !1;
	this.on = function(a) {
		q = a
	};
	this.switchMode = function(a) {
		Z !== a && (Z = a, "edit" === Z ? (this.cancel(), this.rotate(), n.style.display = "none", d.getElement().parentNode.style.display = "") : "view" === Z && ((this.isSaveTip() || P.length || Ba) && (l.show(), setTimeout(function() {
			n.src = d.toDataURL()
		}, 20), Ba = !0), B(), n.removeAttribute("style"), d.getElement().parentNode.style.display = "none"))
	};
	var T, aa, ra, ta, W, X, U, V, pa = 50,
		n = document.createElement("img"),
		w = 0,
		x = 0,
		na = window.innerWidth,
		oa = window.innerHeight - pa,
		da = !1,
		ca = 0,
		L = !1,
		p = 100,
		qa = 0,
		sa = 0,
		Y = 0,
		ba = 0;
	c.remove();
	n.id = "image";
	n.ondragstart = function() {
		return !1
	};
	n.onload = function() {
		0 === w && 0 === x ? (w = this.naturalWidth, x = this.naturalHeight,this.height = x,this.width = w, T = w / x, document.body.appendChild(this), u(this, f), B()) : l.showSaveTip();
		l.hide()
	};
	n.src = f || c.src;
	window.onresize = B;
	document.addEventListener("mousedown", function(a) {
		aa && (ra = a.pageX, ta = a.pageY, qa = Y, sa = ba, document.addEventListener("mousemove", Q))
	});
	document.addEventListener("mouseup", function(a) {
		aa && document.removeEventListener("mousemove", Q)
	});
	this.rotate = function(a) {
		p = 100;
		da = !1;
		a ? (a = parseInt(a, 10), ca = (ca + 90 * a) % 360) : ca = 0;
		0 === ca / 90 % 2 ? (w = n.naturalWidth, x = n.naturalHeight, T = w / x, L = !1) : (w = n.naturalHeight, x = n.naturalWidth, T = w / x, L = !0);
		B();
		q && (q("big", !0), q("small", !0))
	};
	this.scale = function(a) {
		var b, g;
		a = parseInt(a, 10);
		da || (da = !0);
		10 >= p ? b = 1 : 11 <= p && 50 >= p ? b = 10 : 51 <= p && 100 >= p ? b = 5 : 101 <= p && 150 >= p ? b = 10 : 151 <= p && 500 >= p ? b = 50 : 501 <= p && (b = 100);
		p += a * b;
		5 > p ? p = 5 : 3200 < p && (p = 3200);
		L ? (n.width = x * p / 100, n.height = w * p / 100) : (g = n.width / 2 + Y, n.width = w * p / 100, n.height = x * p / 100);
		F(g);
		q && (q("scale", p), q("big", 3200 !== p), q("small", 5 !== p))
	};
	this.nature = function(a) {
		p = 100;
		(da = a) && (L ? (n.width = x, n.height = w) : (n.width = w, n.height = x));
		B();
		q && (q("scale", p), q("big", !0), q("small", !0))
	};
	var d, ua, ka, ea, fa, ja = document.createElement("canvas"),
		D = [],
		P = [],
		N = "",
		C = "",
		M = "#ff407c",
		I = 8,
		ia = 5,
		wa = "SimSun",
		xa = "normal",
		ya = 20,
		e = null;
	this.drawRect = function() {
		C = N = "rect";
		y()
	};
	this.drawCircle = function() {
		C = N = "circle";
		y()
	};
	this.drawEllipse = function() {
		C = N = "ellipse";
		y()
	};
	this.drawText = function() {
		C = N = "text";
		y()
	};
	this.drawLine = function() {
		C = N = "line";
		y()
	};
	this.drawArrow = function() {
		C = N = "arrow";
		y()
	};
	this.cancel = function() {
		E();
		y()
	};
	this.setColor = function(a) {
		if (d.isDrawingMode) d.freeDrawingBrush.color = a;
		else {
			var b = d.getActiveObject();
			b && M !== a && (J("update", b), "i-text" === b.type ? b.set({
				fill: a
			}) : b.set({
				stroke: a
			}), b.render(d.contextContainer))
		}
		M = a
	};
	this.setSize = function(a) {
		if (a = parseInt(a, 10), d.isDrawingMode) d.freeDrawingBrush.width = a;
		else {
			var b = d.getActiveObject();
			b && "i-text" !== b.type && I !== a && (J("update", b), b.set({
				strokeWidth: a
			}), d.renderAll())
		}
		I = a
	};
	this.setFontFamily = function(a) {
		var b = d.getActiveObject();
		b && "i-text" === b.type && (b.set({
			fontFamily: a
		}), d.renderAll());
		wa = a
	};
	this.setFontStyle = function(a) {
		var b = d.getActiveObject();
		b && "i-text" === b.type && (b.set({
			fontStyle: a
		}), d.renderAll());
		xa = a
	};
	this.setFontSize = function(a) {
		var b = d.getActiveObject();
		b && "i-text" === b.type && (b.set({
			fontSize: a
		}), d.renderAll());
		ya = a
	};
	this.pencilPaint = function() {
		E();
		d.freeDrawingBrush = ua;
		d.freeDrawingBrush.color = M;
		d.freeDrawingBrush.width = I;
		d.isDrawingMode = !0
	};
	this.opacityPaint = function() {
		E();
		d.freeDrawingBrush = ka;
		d.freeDrawingBrush.color = M;
		d.freeDrawingBrush.width = I;
		d.isDrawingMode = !0
	};
	this.glassPaint = function() {
		var a = new Image;
		E();
		var b = fabric.document.createElement("canvas");
		b.width = d.width;
		b.height = d.height;
		var g = b.getContext("2d");
		var h = d.getContext().getImageData(0, 0, d.width, d.height);
		h = r(h, ia);
		g.putImageData(h, 0, 0);
		a.src = b.toDataURL();
		ea.source = a;
		d.freeDrawingBrush = ea;
		d.freeDrawingBrush.color = M;
		d.freeDrawingBrush.width = I;
		d.isDrawingMode = !0
	};
	this.mosaicPaint = function() {
		var a = new Image;
		E();
		var b = fabric.document.createElement("canvas");
		b.width = d.width;
		b.height = d.height;
		var g = b.getContext("2d");
		var h = d.getContext().getImageData(0, 0, d.width, d.height);
		var v = ia,
			z, G, t = h.data,
			A = h.height,
			k = h.width;
		for (z = 0; z < A; z += v) for (G = 0; G < k; G += v) {
			var m = 4 * z * k + 4 * G;
			var K = t[m];
			var R = t[m + 1];
			var O = t[m + 2];
			var S = t[m + 3];
			for (var la = z, Ca = z + v; la < Ca; la++) for (var ma = G, Da = G + v; ma < Da; ma++) m = 4 * la * k + 4 * ma, t[m] = K, t[m + 1] = R, t[m + 2] = O, t[m + 3] = S
		}
		g.putImageData(h, -ia / 2, -ia / 2);
		a.src = b.toDataURL();
		ea.source = a;
		d.freeDrawingBrush = ea;
		d.freeDrawingBrush.color = M;
		d.freeDrawingBrush.width = I;
		d.isDrawingMode = !0
	};
	this.setBlur = function(a) {
		ia = parseInt(a, 10)
	};
	this.isSaveTip = function() {
		return 1 < d.getObjects().length
	};
	this.undo = function() {
		var a, b;
		if (D.length) {
			switch (a = D.pop(), a.cmd) {
			case "update":
				(b = d.getObjects().slice().filter(function(g) {
					return a.data.id === g.id
				})[0]) && (b.remove(), b = [a.data, a.data = b][0], d.add(b));
				break;
			case "remove":
				(b = d.getObjects().slice().filter(function(g) {
					return a.data.id === g.id
				})[0]) && (b.remove(), a.cmd = "add");
				break;
			case "add":
				d.add(a.data), a.cmd = "remove"
			}
			P.push(a);
			d.renderAll();
			q && (q("undo", !! D.length), q("restore", !! P.length), q("clear", !! D.length))
		}
	};
	this.restore = function() {
		var a, b;
		if (P.length) {
			switch (a = P.pop(), a.cmd) {
			case "update":
				(b = d.getObjects().slice().filter(function(g) {
					return a.data.id === g.id
				})[0]) && (b.remove(), b = [a.data, a.data = b][0], d.add(b));
				break;
			case "add":
				d.add(a.data);
				a.cmd = "remove";
				break;
			case "remove":
				(b = d.getObjects().slice().filter(function(g) {
					return a.data.id === g.id
				})[0]) && (b.remove(), a.cmd = "add")
			}
			D.push(a);
			d.renderAll();
			q && (q("undo", !! D.length), q("restore", !! P.length), q("clear", !! D.length))
		}
	};
	this.clear = function() {
		d.getObjects().slice().forEach(function(a) {
			"bg" !== a.name && a.remove()
		});
		d.renderAll();
		D = [];
		P = [];
		q && (q("undo", !! D.length), q("restore", !! P.length), q("clear", !! D.length))
	};
	this.isHideTip = function() {
		return d.isDrawingMode || "" !== N
	};
	this.save = function() {
		var a = document.createElement("a");
		a.href = d.toDataURL();
		a.download = Date.now() + ".png";
		a.click()
	};
	this.canvasScale = function(a) {
		a = parseFloat(a) || 1;
		d.setZoom(a);
		d.setWidth(w * a);
		d.setHeight(x * a);
		fa = fabric.util.invertTransform(d.viewportTransform)
	}
}
function report(c) {
	chrome.runtime.sendMessage({
		cmd: "report",
		status: c
	})
}

function init(c, f) {
	picObj = new Picture(c, f, loadObj);
	picObj.on(function(l, F) {
		var H = document.querySelector(".undo"),
			B = document.querySelector(".restore"),
			Q = document.querySelector(".clear"),
			u = document.querySelector(".zoom-out"),
			r = document.querySelector(".zoom-in");
		switch (l) {
		case "undo":
			F ? H.classList.remove("disabled") : H.classList.add("disabled");
			break;
		case "restore":
			F ? B.classList.remove("disabled") : B.classList.add("disabled");
			break;
		case "clear":
			F ? Q.classList.remove("disabled") : Q.classList.add("disabled");
			break;
		case "small":
			F ? u.classList.remove("disabled") : u.classList.add("disabled");
			break;
		case "big":
			F ? r.classList.remove("disabled") : r.classList.add("disabled");
			break;
		case "scale":
			updateZoomTip(F)
		}
	});
	report(1);
	initTool();
	initOperation();
	initZoomTip();
	document.body.classList.add("picture-ps")
}

function initTool() {
	var c = document.createElement("div");
	c.classList.add("tool-wrap");
	c.innerHTML = '\n    <div id="toolbar" class="toolbar">\n      <div class="history clear disabled">重置</div>\n      <div id="undo" class="history undo disabled" title="回退"></div>\n      <div id="restore" class="history restore disabled" title="撤销"></div>\n      <div class="linegap"></div>\n      <div class="shape multi rect" id="shape" data-type="rect" title="图形">\n        <div id="shapes" class="shapes">\n          <a href="#" class="rect" data-type="rect" title="正方形"></a>\n          <a href="#" class="circle" data-type="circle" title="圆形"></a>\n          <a href="#" class="ellipse" data-type="ellipse" title="椭圆"></a>\n        </div>\n      </div>\n      <div class="line" id="line" data-type="line" title="直线"></div>\n      <div class="arrow" id="arrow" data-type="arrow" title="箭头"></div>\n      <div class="pen multi pencil" id="pen" data-type="pencil" title="画笔">\n        <div id="pens" class="pens">\n          <a href="#" class="pencil" data-type="pencil" title="画笔"></a>\n          <a href="#" class="brush" data-type="brush" title="笔刷"></a>\n        </div>\n      </div>\n      <div class="text multi" id="text" title="文字">\n        <div class="text-wrapper">\n          <div class="text-wrapper-inner">\n            <input class="text-range" id="textRange" type="range" value="20" min="12" max="40" title="字号">\n            <span id="fontSize">20px</span>\n            <select class="select-font" title="字体">\n              <option selected="selected" value="SimSun">宋体</option>\n              <option value="Microsoft YaHei">微软雅黑</option>\n              <option value="SimHei">黑体</option>\n              <option value="NSimSun">新宋体</option>\n              <option value="FangSong">仿宋</option>\n              <option value="KaiTi">楷体</option>\n              <option value="Times New Roman">Times New Roman</option>\n              <option value="Arial">Arial</option>\n              <option value="Courier New">Courier New</option>\n            </select>\n            <select class="select-font-style" title="样式">\n              <option selected="selected" value="normal">正常</option>\n              <option value="bold">加粗</option>\n              <option value="italic">斜体</option>\n            </select>\n          </div>\n        </div>\n      </div>\n      <div class="mosaicPaint" id="mosaicPaint" title="马赛克"></div>\n      <div class="linegap"></div>\n      <div class="pickcolor color" id="pickcolor" title="颜色">\n        <input type="color" class="color" id="colorpicker" value="#ff407c" />\n      </div>\n      <div class="fontrange multi pickstyle" title="粗细">\n        <div class="range-wrapper">\n          <input class="range" id="range" type="range" value="8" min="2" max="40">\n          <span>8</span>\n        </div>\n      </div>\n      <div class="finish">完成</div>\n    </div>\n  ';
	document.body.appendChild(c);
	bindToolEvent()
}

function initOperation() {
	var c = document.createElement("div");
	c.classList.add("operation");
	var f = '\n    <div class="operation-inner">\n      <button class="zoom-in" title="放大"></button>\n      <button class="zoom-out" title="缩小"></button>\n      <button class="adaptsize" title="按照窗口大小显示"></button>\n      <button class="originsize" title="实际大小"></button>\n      <span class="linegap"></span>\n      <button class="prev disabled" title="上一页"></button>\n      <button class="next disabled" title="下一页"></button>\n      <span class="linegap"></span>\n      <button class="rotateright" title="顺时针90°"></button>\n      <button class="rotateleft" title="逆时针90°"></button>\n  ';
	isEditable && (f += '<button id="edit" class="edit">编辑</button>');
	c.innerHTML = f + "</div>";
	document.body.appendChild(c);
	initOperationEvent(c)
}

function initOperationEvent(c) {
	c.addEventListener("click", function(f) {
		f = f.target.classList;
		f.contains("zoom-in") && !f.contains("disabled") ? (picObj.scale(1), report(7)) : f.contains("zoom-out") && !f.contains("disabled") ? (picObj.scale(-1), report(7)) : f.contains("rotateleft") ? (picObj.rotate(-1), report(5)) : f.contains("rotateright") ? (picObj.rotate(1), report(5)) : f.contains("adaptsize") ? (picObj.nature(!1), report(2)) : f.contains("originsize") ? (picObj.nature(!0), report(3)) : f.contains("edit") && (picObj.switchMode("edit"), document.querySelector(".operation").style.display = "none", document.querySelector(".tool-wrap").style.display = "block", hasShowSaveTip && (document.getElementById("saveTip").style.display = "none"), report(6))
	}, !1);
	filePath && chrome.runtime.sendMessage({
		cmd: "list",
		value: filePath
	})
}
function initZoomTip() {
	var c = document.createElement("span");
	c.id = "zoomTip";
	c.innerText = "100%";
	document.body.appendChild(c)
}

function updateZoomTip(c) {
	var f = document.getElementById("zoomTip");
	f.classList.contains("show") ? clearInterval(zoomTimer) : (f.classList.add("show"), hasShowSaveTip && document.getElementById("saveTip").classList.contains("show") && (document.getElementById("saveTip").style.display = "none"));
	f.innerText = c + "%";
	zoomTimer = setTimeout(function() {
		f.classList.remove("show")
	}, 2E3)
}

function initNextAndPrev(c) {
	var f = document.querySelector(".operation");
	c = null != c ? c : fileList.indexOf(filePath);
	fileList.length && f.querySelectorAll(".prev, .next").forEach(function(l) {
		l.classList.remove("disabled")
	});
	f.querySelector(".next").addEventListener("click", function(l) {
		c = c + 1 >= fileList.length ? 0 : c + 1;
		location.href = "file:///" + fileList[c];
		report(4)
	}, !1);
	f.querySelector(".prev").addEventListener("click", function(l) {
		c = 0 > c - 1 ? fileList.length - 1 : c - 1;
		location.href = "file:///" + fileList[c];
		report(4)
	}, !1)
}

function findAncestor(c, f) {
	for (var l = !1; null != c && !(l = f(c));) c = c.parentNode;
	return l ? c : null
}
function findAncestorByClass(c, f) {
	return findAncestor(c, function(l) {
		return l.className && -1 < l.className.indexOf(f)
	})
}
function removeClass(c, f) {
	c = c.querySelectorAll("." + f);
	for (var l = 0; l < c.length; l++) c[l].classList.remove(f)
}

function bindToolEvent() {
	var c, f = !1,
		l = !1,
		F = 0,
		H = document.getElementById("toolbar"),
		B = document.querySelector(".tool-wrap"),
		Q = document.querySelector(".range-wrapper");
	Q.addEventListener("mouseleave", function(u) {
		setTimeout(function() {
			l || Q.classList.remove("showin")
		}, 1300)
	});
	H.addEventListener("mouseleave", function(u) {
		l = f = !1;
		document.querySelector(".shapes").classList.remove("show");
		document.querySelector(".pens").classList.remove("show")
	});
	document.querySelector(".text").addEventListener("mouseleave", function(u) {
		setTimeout(function() {
			canMoveFont || f || document.querySelector(".text-wrapper").classList.remove("show")
		}, 1300)
	});
	window.addEventListener("resize", function(u) {
		780 < document.body.clientWidth && B.classList.contains("small") && (B.style.marginLeft = 0, B.classList.remove("small"))
	});
	document.addEventListener("scroll", function(u) {
		u = document.body.scrollLeft;
		var r = document.body.clientWidth,
			E = B.clientWidth;
		780 > r && u !== F ? (B.classList.add("small"), B.style.marginLeft = (E - r) / (document.body.scrollWidth - r) * -u + "px", F = document.body.scrollLeft) : 780 <= r && B.classList.remove("small")
	});
	H.addEventListener("mouseover", function(u) {
		var r = u.target;
		l = f = !1;
		removeClass(H, "show");
		r.classList.contains("text") || findAncestorByClass(u.target, "text") ? (f = !0, document.querySelector(".text-wrapper").classList.add("show")) : r.classList.contains("shape") || findAncestorByClass(u.target, "shape") ? document.querySelector(".shapes").classList.add("show") : r.classList.contains("pen") || findAncestorByClass(u.target, "pen") ? document.querySelector(".pens").classList.add("show") : r.classList.contains("range-wrapper") || findAncestorByClass(u.target, "fontrange") ? l = !0 : r.parentNode.classList.contains("toolbar") && Q.classList.remove("showin")
	});
	document.addEventListener("click", function(u) {
		var r = u.target,
			E = r.classList,
			y = findAncestorByClass(r, "toolbar");
		if (c = r.getAttribute("data-type"), y) {
			if ("a" === r.tagName.toLowerCase()) {
				y = findAncestorByClass(r, "multi");
				var J = y.getAttribute("data-type");
				removeClass(H, "active");
				y.classList.remove(J);
				r.classList.add("active");
				y.classList.add(c);
				y.classList.add("active");
				y.setAttribute("data-type", c);
				u.preventDefault()
			} else E.contains("pickstyle") ? (y = r.querySelector("div").classList, l = !0, y.contains("showin") ? (E.remove("active"), y.remove("showin")) : (E.add("active"), y.add("showin"))) : "select" === r.tagName.toLowerCase() || "input" === r.tagName.toLowerCase() || E.contains("history") || (E.contains("active") ? removeClass(H, "active") : (removeClass(H, "active"), E.add("active")));
			beginDraw(r, E, u)
		} else removeClass(H, "show")
	}, !1);
	document.getElementById("colorpicker").addEventListener("change", function(u) {
		picObj.setColor(u.target.value)
	});
	updateFontStyle();
	bindRangeEvent(document.getElementById("range"))
}

function updateFontStyle() {
	var c = document.querySelector(".select-font"),
		f = (document.querySelector(".text-wrapper"), document.querySelector(".select-font-style"));
	selectFontsize(document.getElementById("textRange"));
	c.addEventListener("change", function(l) {
		picObj.setFontFamily(c.value)
	});
	f.addEventListener("change", function(l) {
		picObj.setFontStyle(f.value)
	});
	c.addEventListener("click", function(l) {
		c.classList.add("active")
	})
}

function selectFontsize(c) {
	c.addEventListener("mousedown", function(f) {
		canMoveFont = !0
	});
	c.addEventListener("click", function(f) {
		changeRangeBg(c, 3.57 * (c.value - 12));
		document.getElementById("fontSize").innerText = c.value + "px"
	});
	c.addEventListener("mousemove", function(f) {
		canMoveFont && (changeRangeBg(c, 3.57 * (c.value - 12)), document.getElementById("fontSize").innerText = c.value + "px")
	});
	c.addEventListener("mouseup", function(f) {
		canMoveFont = !1;
		c.value && picObj.setFontSize(c.value)
	})
}

function bindRangeEvent(c) {
	var f = !1;
	c.addEventListener("mousedown", function(l) {
		f = !0
	});
	c.addEventListener("click", function(l) {
		changeRangeBg(c, 2.63 * (c.value - 2));
		c.parentNode.querySelector("span").innerText = c.value
	});
	c.addEventListener("mousemove", function(l) {
		f && (changeRangeBg(c, 2.63 * (c.value - 2)), c.parentNode.querySelector("span").innerText = c.value)
	});
	c.addEventListener("mouseup", function(l) {
		f = !1;
		l.target.value && picObj.setSize(l.target.value)
	})
}

function changeRangeBg(c, f) {
	c.style.backgroundImage = "-webkit-linear-gradient(left ,#f22 0%,#f22 " + f + "%,#eee " + f + "%, #eee 100%)"
}
function finishDraw() {
	picObj.switchMode("view");
	document.querySelector(".operation").style.display = "block";
	document.querySelector(".tool-wrap").style.display = "none"
}
function setDrawOrCancel(c, f) {
	c.classList.contains("active") ? f && f() : picObj.cancel()
}

function beginDraw(c, f, l) {
	f.contains("undo") && !f.contains("disabled") ? picObj.undo() : f.contains("restore") && !f.contains("disabled") ? picObj.restore() : f.contains("clear") && !f.contains("disabled") ? picObj.clear() : f.contains("finish") ? finishDraw() : f.contains("line") ? setDrawOrCancel(c, picObj.drawLine) : f.contains("arrow") ? setDrawOrCancel(c, picObj.drawArrow) : f.contains("pencil") ? setDrawOrCancel(c, picObj.pencilPaint) : f.contains("brush") ? setDrawOrCancel(c, picObj.opacityPaint) : f.contains("mosaicPaint") ? setDrawOrCancel(c, picObj.mosaicPaint) : f.contains("glassPaint") ? setDrawOrCancel(c, picObj.glassPaint) : f.contains("rect") ? setDrawOrCancel(c, picObj.drawRect) : f.contains("circle") ? setDrawOrCancel(c, picObj.drawCircle) : f.contains("ellipse") ? setDrawOrCancel(c, picObj.drawEllipse) : f.contains("text") ? setDrawOrCancel(c, picObj.drawText) : f.contains("range") ? picObj.setSize(l.target.value) : f.contains("blur-range") ? picObj.setBlur(l.target.value) : f.contains("text-range") && picObj.setFontSize(l.target.value)
}
document.documentElement.style.display = "none";

var filePath = "file:" !== location.protocol || location.host ? "" : decodeURI(location.pathname).replace(/^\//i, ""),
	isEditable = !(!filePath && "file:" === location.protocol || /\.gif$/.test(filePath)),
	isShareLink = !filePath && "service.weibo.com" === location.host,
	fileList, picObj, zoomTimer, canMoveFont = !1,
	hasShowSaveTip = !1,
	loadObj = {
		init: function() {
			var c = document.createElement("div");
			c.id = "loading";
			document.body.style.backgroundColor = "grey"
			document.body.appendChild(c);
			document.documentElement.style.display = "";
			document.querySelector("img").style.display = "none"
		},
		show: function() {
			document.getElementById("loading").style.display = "block"
		},
		hide: function() {
			document.getElementById("loading").style.display = "none"
		},
		showSaveTip: function() {
			if (!hasShowSaveTip) {
				var c = document.createElement("p");
				c.id = "saveTip";
				c.innerText = "“右键-图片另存为”可保存图片到本地";
				document.body.appendChild(c);
				hasShowSaveTip = !0;
				setTimeout(function() {
					c.classList.add("show")
				}, 100);
				setTimeout(function() {
					c.style.display = "none"
				}, 4200)
			}
		}
	};
window.loadObj = loadObj;
window.addEventListener("load", function(c) {
	if (filePath) {
		loadObj.init();
		var f = setInterval(function() {
			chrome.runtime.sendMessage({
				cmd: "live"
			}, function(l) {
				l && (f = clearInterval(f), chrome.runtime.sendMessage({
					cmd: "base64",
					value: filePath
				}))
			})
		}, 50)
	} 
	else isShareLink ? document.documentElement.style.display = "" : 1 === document.querySelectorAll("img").length ? (loadObj.init(), init(document.querySelector("img"))) : document.documentElement.style.display = ""
}, !1);
window.addEventListener("beforeunload", function(c) {
	picObj && picObj.isSaveTip() && (c.returnValue = "ok")
}, !1);
chrome.runtime.onMessage.addListener(function(c, f, l) {
	if (c.error) return console.log(c.error);
	switch (c.cmd) {
	case "list":
		fileList = c.list.map(function(F) {
			return F.replace(/\\+/g, "/")
		});
		initNextAndPrev(c.idx);
		break;
	case "base64":
		init(document.querySelector("img"), c.base64)
	}
});