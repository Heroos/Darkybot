function dist(x1,y1,x2,y2) { 
	x2-=x1; y2-=y1; 
	return Math.sqrt((x2*x2) + (y2*y2)); 
}

function clearCircle(context,x,y,radius) {
	context.save();
	context.beginPath();
	context.arc(x, y, radius, 0, 2*Math.PI, true);
	context.clip();
	context.clearRect(x-radius,y-radius,radius*2,radius*2);
	context.restore();
}

function clearLineSquared(context,x1,y1,x2,y2,thickness) {
	var tmp, length;

	// swap coordinate pairs if x-coordinates are RTL to make them LTR
	if (x2 < x1) {
		tmp = x1; x1 = x2; x2 = tmp;
		tmp = y1; y1 = y2; y2 = tmp;
	}

	length = dist(x1,y1,x2,y2);

	context.save();
	context.translate(x1,y1);
	context.rotate(Math.atan2(y2-y1,x2-x1));
	context.clearRect(0,0,length,thickness);
	context.restore();
}

function clearLineRounded(context,x1,y1,x2,y2,thickness) {
	if (thickness <= 2) {
		clearLineSquared(context,x1,y1,x2,y2,thickness);
		return;
	}

	var tmp, half_thickness = thickness / 2, length,
		PI15 = 1.5 * Math.PI, PI05 = 0.5 * Math.PI
	;

	// swap coordinate pairs if x-coordinates are RTL to make them LTR
	if (x2 < x1) {
		tmp = x1; x1 = x2; x2 = tmp;
		tmp = y1; y1 = y2; y2 = tmp;
	}

	length = dist(x1,y1,x2,y2);

	context.save();
	context.translate(x1,y1);
	context.rotate(Math.atan2(y2-y1,x2-x1));
	x1 = 0;
	y1 = 0;
	x2 = length - 1;
	y2 = 0;
	// draw a complex "line" shape with rounded corner caps

	context.moveTo(x1,y1-half_thickness);
	context.lineTo(x2,y2-half_thickness);
	context.arc(x2,y2,half_thickness,PI15,PI05,false);
	context.lineTo(x1,y1-half_thickness+thickness);
	context.arc(x1,y1,half_thickness,PI05,PI15,false);
	context.closePath();
	x1 -= half_thickness;
	y1 -= half_thickness;

	context.clip();
	context.clearRect(x1,y1,length+thickness,thickness);
	context.restore();
}
function polygon(ctx, x, y, radius, sides, startAngle, counterClockwise) {
  if (sides < 3) return
  var a = (Math.PI * 2) / sides
  a = counterClockwise ? -a : a
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(startAngle || 0)
  ctx.moveTo(radius, 0)
  ctx.beginPath()
  for (var i = 1; i <= sides; i++) {
    ctx.lineTo(radius * Math.cos(a * i), radius * Math.sin(a * i))
  }
  ctx.closePath()
  ctx.stroke()
  ctx.restore()
}
function fillPolygon(ctx, x, y, radius, sides, startAngle, counterClockwise) {
  if (sides < 3) return
  var a = (Math.PI * 2) / sides
  a = counterClockwise ? -a : a
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(startAngle || 0)
  ctx.moveTo(radius, 0)
  ctx.beginPath()
  for (var i = 1; i <= sides; i++) {
    ctx.lineTo(radius * Math.cos(a * i), radius * Math.sin(a * i))
  }
  ctx.closePath()
  ctx.fill()
  ctx.restore()
}
function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  if (typeof stroke == 'undefined') {
    stroke = true;
  }
  if (typeof radius === 'undefined') {
    radius = 5;
  }
  if (typeof radius === 'number') {
    radius = {tl: radius, tr: radius, br: radius, bl: radius};
  } else {
    var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
    for (var side in defaultRadius) {
      radius[side] = radius[side] || defaultRadius[side];
    }
  }
  ctx.beginPath();
  ctx.moveTo(x + radius.tl, y);
  ctx.lineTo(x + width - radius.tr, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
  ctx.lineTo(x + width, y + height - radius.br);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
  ctx.lineTo(x + radius.bl, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
  ctx.lineTo(x, y + radius.tl);
  ctx.quadraticCurveTo(x, y, x + radius.tl, y);
  ctx.closePath();
  if (fill) {
    ctx.fill();
  }
  if (stroke) {
    ctx.stroke();
  }

}
function grayScale(canvasCtx, contrast, brightness) {
  const pixels = canvasCtx.getImageData(0, 0, canvasCtx.canvas.width, canvasCtx.canvas.height);
  const d = pixels.data;
  let i = 0;
  for (i = 0; i < d.length; i += 4) {
    const r = d[i + 0];
    const g = d[i + 1];
    const b = d[i + 2];
    const a = d[i + 3];
    let v = (0.2126 * r) + (0.7152 * g) + (0.0722 * b);
    if (contrast && brightness) {
          v /= a;

          // Apply contrast.
          v = ((v - 0.5) * Math.max(contrast, 0)) + 0.5;

          // Apply brightness.
          v += brightness;

          // Return final pixel color.
          v *= a;
    }
    d[i + 0] = v;
    d[i + 1] = v;
    d[i + 2] = v;
  }
  canvasCtx.putImageData(pixels, 0, 0)
};
function invert(canvasCtx) {
  const pixels = canvasCtx.getImageData(0, 0, canvasCtx.canvas.width, canvasCtx.canvas.height);
  const d = pixels.data;
  let i = 0;
  for (i = 0; i < d.length; i += 4) {
    d[i + 0] = 255-d[i + 0];
    d[i + 1] = 255-d[i + 1];
    d[i + 2] = 255-d[i + 2];
  }
  canvasCtx.putImageData(pixels, 0, 0)
};
function blurple(canvasCtx) {
  const pixels = canvasCtx.getImageData(0, 0, canvasCtx.canvas.width, canvasCtx.canvas.height);
  const d = pixels.data;
  let i = 0;
  for (i = 0; i < d.length; i += 4) {
    let color = ((d[i + 0] + d[i + 1] + d[i + 2]) / 3 > 250 ? {r:255, g:255, b:255} : {r:114, g:137, b:217})
    d[i + 0] = color.r;
    d[i + 1] = color.g;
    d[i + 2] = color.b;
  }
  canvasCtx.putImageData(pixels, 0, 0)
};
module.exports.clearCircle = clearCircle
module.exports.clearLineSquared = clearLineSquared
module.exports.clearLineRounded = clearLineRounded
module.exports.dist = dist
module.exports.fillPolygon = fillPolygon
module.exports.polygon = polygon
module.exports.roundRect = roundRect
module.exports.grayScale = grayScale
module.exports.invert = invert
module.exports.blurple = blurple