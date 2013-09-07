package com.wwl.canvas;

import android.app.Activity;
import android.content.Context;
import android.view.View;

import android.graphics.Path;
import android.graphics.Paint;
import android.graphics.Typeface;

import java.util.concurrent.ArrayBlockingQueue;

import org.appcelerator.kroll.KrollDict;
import org.appcelerator.titanium.TiC;
import org.appcelerator.titanium.proxy.TiViewProxy;
import org.appcelerator.titanium.view.TiUIView;

import android.graphics.Bitmap;
import android.graphics.Canvas;


public class CanvasView extends TiUIView {


	class CView extends View {

		public TiViewProxy proxy;
		public Paint paint = new Paint();
		public ArrayBlockingQueue<Paint> paints = new ArrayBlockingQueue<Paint>(100);
		public Path path;
		public ArrayBlockingQueue<Path> paths = new ArrayBlockingQueue<Path>(100);
		public Canvas currentCanvas;
		public Bitmap bitmap;
		public boolean shape = false;

		public float shadowRadius = 0;
		public float shadowOffsetX = 0;
		public float shadowOffsetY = 0;
		public int shadowColor = 0;

		int textStyle = Typeface.NORMAL;

		private CView(Context c) {
			super(c);
			
			path = new Path();
			paint = new Paint();
		}

		@Override
		protected void onSizeChanged(int w, int h, int oldw, int oldh) {

			super.onSizeChanged(w, h, oldw, oldh);

			/* Create canvas */
			bitmap = Bitmap.createBitmap(w, h, Bitmap.Config.ARGB_8888);
			currentCanvas = new Canvas(bitmap);

			/* Fire load event */
			KrollDict data = new KrollDict();
			proxy.fireEvent(TiC.EVENT_LOAD, data);
		}

		/* Remove current path from array */
		public void removeCurrentPath() {
			paths.remove(path);
			paints.remove(paint);
		}

		public void resetPaths() {
			paints.clear();
			paths.clear();
			path = new Path();
		}

		@Override
		protected void onDraw(Canvas canvas) {

			if (!shape) {

				/* Draw paths to currentCanvas -> bitmap */
				while (paths.peek() != null) {
					currentCanvas.drawPath(paths.poll(), paints.poll());
				}
			}

			/* Persist bitmap in current view */
			canvas.drawBitmap(bitmap, 0, 0, null);
		}
	}


	/* Reference to the canvas */
	public Activity activity; 
	public CView cView;


	public CanvasView(TiViewProxy proxy) {

		super(proxy);
		activity = proxy.getActivity();
		cView = new CView(activity);
		cView.proxy = proxy;
		setNativeView(cView);
	}


	@Override
	public void processProperties(KrollDict d) {
		super.processProperties(d);
	}

	public void drawShape() {

		///* Remove all paths */
		//cView.resetPaths();
		activity.runOnUiThread(new Runnable() {

            @Override
            public void run() {
            	cView.shape = true;
            	cView.invalidate();
            }
        });
	}

	public void drawPath() {

		/* Add path to draw queue */
		cView.paints.offer(new Paint(cView.paint));
		cView.paths.offer(new Path(cView.path));

		activity.runOnUiThread(new Runnable() {

            @Override
            public void run() {
            	cView.shape = false;
            	cView.invalidate();
            }
        });
	}
}
