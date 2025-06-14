function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ../assets/images/male_images/male0001.png
     ../assets/images/male_images/male0002.png
     ../assets/images/male_images/male0003.png
     ../assets/images/male_images/male0004.png
     ../assets/images/male_images/male0005.png
     ../assets/images/male_images/male0006.png
     ../assets/images/male_images/male0007.png
     ../assets/images/male_images/male0008.png
     ../assets/images/male_images/male0009.png
     ../assets/images/male_images/male0010.png
     ../assets/images/male_images/male0011.png
     ../assets/images/male_images/male0012.png
     ../assets/images/male_images/male0013.png
     ../assets/images/male_images/male0014.png
     ../assets/images/male_images/male0015.png
     ../assets/images/male_images/male0016.png
     ../assets/images/male_images/male0017.png
     ../assets/images/male_images/male0018.png
     ../assets/images/male_images/male0019.png
     ../assets/images/male_images/male0020.png
     ../assets/images/male_images/male0021.png
     ../assets/images/male_images/male0022.png
     ../assets/images/male_images/male0023.png
     ../assets/images/male_images/male0024.png
     ../assets/images/male_images/male0025.png
     ../assets/images/male_images/male0026.png
     ../assets/images/male_images/male0027.png
     ../assets/images/male_images/male0028.png
     ../assets/images/male_images/male0029.png
     ../assets/images/male_images/male0030.png
     ../assets/images/male_images/male0031.png
     ../assets/images/male_images/male0032.png
     ../assets/images/male_images/male0033.png
     ../assets/images/male_images/male0034.png
     ../assets/images/male_images/male0035.png
     ../assets/images/male_images/male0036.png
     ../assets/images/male_images/male0037.png
     ../assets/images/male_images/male0038.png
     ../assets/images/male_images/male0039.png
     ../assets/images/male_images/male0040.png
     ../assets/images/male_images/male0041.png
     ../assets/images/male_images/male0042.png
     ../assets/images/male_images/male0043.png
     ../assets/images/male_images/male0044.png
     ../assets/images/male_images/male0045.png
     ../assets/images/male_images/male0046.png
     ../assets/images/male_images/male0047.png
     ../assets/images/male_images/male0048.png
     ../assets/images/male_images/male0049.png
     ../assets/images/male_images/male0050.png
     ../assets/images/male_images/male0051.png
     ../assets/images/male_images/male0052.png
     ../assets/images/male_images/male0053.png
     ../assets/images/male_images/male0054.png
     ../assets/images/male_images/male0055.png
     ../assets/images/male_images/male0056.png
     ../assets/images/male_images/male0057.png
     ../assets/images/male_images/male0058.png
     ../assets/images/male_images/male0059.png
     ../assets/images/male_images/male0060.png
     ../assets/images/male_images/male0061.png
     ../assets/images/male_images/male0062.png
     ../assets/images/male_images/male0063.png
     ../assets/images/male_images/male0064.png
     ../assets/images/male_images/male0065.png
     ../assets/images/male_images/male0066.png
     ../assets/images/male_images/male0067.png
     ../assets/images/male_images/male0068.png
     ../assets/images/male_images/male0069.png
     ../assets/images/male_images/male0070.png
     ../assets/images/male_images/male0071.png
     ../assets/images/male_images/male0072.png
     ../assets/images/male_images/male0073.png
     ../assets/images/male_images/male0074.png
     ../assets/images/male_images/male0075.png
     ../assets/images/male_images/male0076.png
     ../assets/images/male_images/male0077.png
     ../assets/images/male_images/male0078.png
     ../assets/images/male_images/male0079.png
     ../assets/images/male_images/male0080.png
     ../assets/images/male_images/male0081.png
     ../assets/images/male_images/male0082.png
     ../assets/images/male_images/male0083.png
     ../assets/images/male_images/male0084.png
     ../assets/images/male_images/male0085.png
     ../assets/images/male_images/male0086.png
     ../assets/images/male_images/male0087.png
     ../assets/images/male_images/male0088.png
     ../assets/images/male_images/male0089.png
     ../assets/images/male_images/male0090.png
     ../assets/images/male_images/male0091.png
     ../assets/images/male_images/male0092.png
     ../assets/images/male_images/male0093.png
     ../assets/images/male_images/male0094.png
     ../assets/images/male_images/male0095.png
     ../assets/images/male_images/male0096.png
     ../assets/images/male_images/male0097.png
     ../assets/images/male_images/male0098.png
     ../assets/images/male_images/male0099.png
     ../assets/images/male_images/male0100.png
     ../assets/images/male_images/male0101.png
     ../assets/images/male_images/male0102.png
     ../assets/images/male_images/male0103.png
     ../assets/images/male_images/male0104.png
     ../assets/images/male_images/male0105.png
     ../assets/images/male_images/male0106.png
     ../assets/images/male_images/male0107.png
     ../assets/images/male_images/male0108.png
     ../assets/images/male_images/male0109.png
     ../assets/images/male_images/male0110.png
     ../assets/images/male_images/male0111.png
     ../assets/images/male_images/male0112.png
     ../assets/images/male_images/male0113.png
     ../assets/images/male_images/male0114.png
     ../assets/images/male_images/male0115.png
     ../assets/images/male_images/male0116.png
     ../assets/images/male_images/male0117.png
     ../assets/images/male_images/male0118.png
     ../assets/images/male_images/male0119.png
     ../assets/images/male_images/male0120.png
     ../assets/images/male_images/male0121.png
     ../assets/images/male_images/male0122.png
     ../assets/images/male_images/male0123.png
     ../assets/images/male_images/male0124.png
     ../assets/images/male_images/male0125.png
     ../assets/images/male_images/male0126.png
     ../assets/images/male_images/male0127.png
     ../assets/images/male_images/male0128.png
     ../assets/images/male_images/male0129.png
     ../assets/images/male_images/male0130.png
     ../assets/images/male_images/male0131.png
     ../assets/images/male_images/male0132.png
     ../assets/images/male_images/male0133.png
     ../assets/images/male_images/male0134.png
     ../assets/images/male_images/male0135.png
     ../assets/images/male_images/male0136.png
     ../assets/images/male_images/male0137.png
     ../assets/images/male_images/male0138.png
     ../assets/images/male_images/male0139.png
     ../assets/images/male_images/male0140.png
     ../assets/images/male_images/male0141.png
     ../assets/images/male_images/male0142.png
     ../assets/images/male_images/male0143.png
     ../assets/images/male_images/male0144.png
     ../assets/images/male_images/male0145.png
     ../assets/images/male_images/male0146.png
     ../assets/images/male_images/male0147.png
     ../assets/images/male_images/male0148.png
     ../assets/images/male_images/male0149.png
     ../assets/images/male_images/male0150.png
     ../assets/images/male_images/male0151.png
     ../assets/images/male_images/male0152.png
     ../assets/images/male_images/male0153.png
     ../assets/images/male_images/male0154.png
     ../assets/images/male_images/male0155.png
     ../assets/images/male_images/male0156.png
     ../assets/images/male_images/male0157.png
     ../assets/images/male_images/male0158.png
     ../assets/images/male_images/male0159.png
     ../assets/images/male_images/male0160.png
     ../assets/images/male_images/male0161.png
     ../assets/images/male_images/male0162.png
     ../assets/images/male_images/male0163.png
     ../assets/images/male_images/male0164.png
     ../assets/images/male_images/male0165.png
     ../assets/images/male_images/male0166.png
     ../assets/images/male_images/male0167.png
     ../assets/images/male_images/male0168.png
     ../assets/images/male_images/male0169.png
     ../assets/images/male_images/male0170.png
     ../assets/images/male_images/male0171.png
     ../assets/images/male_images/male0172.png
     ../assets/images/male_images/male0173.png
     ../assets/images/male_images/male0174.png
     ../assets/images/male_images/male0175.png
     ../assets/images/male_images/male0176.png
     ../assets/images/male_images/male0177.png
     ../assets/images/male_images/male0178.png
     ../assets/images/male_images/male0179.png
     ../assets/images/male_images/male0180.png
     ../assets/images/male_images/male0181.png
     ../assets/images/male_images/male0182.png
     ../assets/images/male_images/male0183.png
     ../assets/images/male_images/male0184.png
     ../assets/images/male_images/male0185.png
     ../assets/images/male_images/male0186.png
     ../assets/images/male_images/male0187.png
     ../assets/images/male_images/male0188.png
     ../assets/images/male_images/male0189.png
     ../assets/images/male_images/male0190.png
     ../assets/images/male_images/male0191.png
     ../assets/images/male_images/male0192.png
     ../assets/images/male_images/male0193.png
     ../assets/images/male_images/male0194.png
     ../assets/images/male_images/male0195.png
     ../assets/images/male_images/male0196.png
     ../assets/images/male_images/male0197.png
     ../assets/images/male_images/male0198.png
     ../assets/images/male_images/male0199.png
     ../assets/images/male_images/male0200.png
     ../assets/images/male_images/male0201.png
     ../assets/images/male_images/male0202.png
     ../assets/images/male_images/male0203.png
     ../assets/images/male_images/male0204.png
     ../assets/images/male_images/male0205.png
     ../assets/images/male_images/male0206.png
     ../assets/images/male_images/male0207.png
     ../assets/images/male_images/male0208.png
     ../assets/images/male_images/male0209.png
     ../assets/images/male_images/male0210.png
     ../assets/images/male_images/male0211.png
     ../assets/images/male_images/male0212.png
     ../assets/images/male_images/male0213.png
     ../assets/images/male_images/male0214.png
     ../assets/images/male_images/male0215.png
     ../assets/images/male_images/male0216.png
     ../assets/images/male_images/male0217.png
     ../assets/images/male_images/male0218.png
     ../assets/images/male_images/male0219.png
     ../assets/images/male_images/male0220.png
     ../assets/images/male_images/male0221.png
     ../assets/images/male_images/male0222.png
     ../assets/images/male_images/male0223.png
     ../assets/images/male_images/male0224.png
     ../assets/images/male_images/male0225.png
     ../assets/images/male_images/male0226.png
     ../assets/images/male_images/male0227.png
     ../assets/images/male_images/male0228.png
     ../assets/images/male_images/male0229.png
     ../assets/images/male_images/male0230.png
     ../assets/images/male_images/male0231.png
     ../assets/images/male_images/male0232.png
     ../assets/images/male_images/male0233.png
     ../assets/images/male_images/male0234.png
     ../assets/images/male_images/male0235.png
     ../assets/images/male_images/male0236.png
     ../assets/images/male_images/male0237.png
     ../assets/images/male_images/male0238.png
     ../assets/images/male_images/male0239.png
     ../assets/images/male_images/male0240.png
     ../assets/images/male_images/male0241.png
     ../assets/images/male_images/male0242.png
     ../assets/images/male_images/male0243.png
     ../assets/images/male_images/male0244.png
     ../assets/images/male_images/male0245.png
     ../assets/images/male_images/male0246.png
     ../assets/images/male_images/male0247.png
     ../assets/images/male_images/male0248.png
     ../assets/images/male_images/male0249.png
     ../assets/images/male_images/male0250.png
     ../assets/images/male_images/male0251.png
     ../assets/images/male_images/male0252.png
     ../assets/images/male_images/male0253.png
     ../assets/images/male_images/male0254.png
     ../assets/images/male_images/male0255.png
     ../assets/images/male_images/male0256.png
     ../assets/images/male_images/male0257.png
     ../assets/images/male_images/male0258.png
     ../assets/images/male_images/male0259.png
     ../assets/images/male_images/male0260.png
     ../assets/images/male_images/male0261.png
     ../assets/images/male_images/male0262.png
     ../assets/images/male_images/male0263.png
     ../assets/images/male_images/male0264.png
     ../assets/images/male_images/male0265.png
     ../assets/images/male_images/male0266.png
     ../assets/images/male_images/male0267.png
     ../assets/images/male_images/male0268.png
     ../assets/images/male_images/male0269.png
     ../assets/images/male_images/male0270.png
     ../assets/images/male_images/male0271.png
     ../assets/images/male_images/male0272.png
     ../assets/images/male_images/male0273.png
     ../assets/images/male_images/male0274.png
     ../assets/images/male_images/male0275.png
     ../assets/images/male_images/male0276.png
     ../assets/images/male_images/male0277.png
     ../assets/images/male_images/male0278.png
     ../assets/images/male_images/male0279.png
     ../assets/images/male_images/male0280.png
     ../assets/images/male_images/male0281.png
     ../assets/images/male_images/male0282.png
     ../assets/images/male_images/male0283.png
     ../assets/images/male_images/male0284.png
     ../assets/images/male_images/male0285.png
     ../assets/images/male_images/male0286.png
     ../assets/images/male_images/male0287.png
     ../assets/images/male_images/male0288.png
     ../assets/images/male_images/male0289.png
     ../assets/images/male_images/male0290.png
     ../assets/images/male_images/male0291.png
     ../assets/images/male_images/male0292.png
     ../assets/images/male_images/male0293.png
     ../assets/images/male_images/male0294.png
     ../assets/images/male_images/male0295.png
     ../assets/images/male_images/male0296.png
     ../assets/images/male_images/male0297.png
     ../assets/images/male_images/male0298.png
     ../assets/images/male_images/male0299.png
     ../assets/images/male_images/male0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})


document.getElementById("projectToggle").addEventListener("click", function () {
    const dropdown = document.getElementById("projectDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

// Optional: Hide dropdown if clicked outside
document.addEventListener("click", function (e) {
    const button = document.getElementById("projectToggle");
    const dropdown = document.getElementById("projectDropdown");
    if (!button.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.style.display = "none";
    }
});