/**
 * 下界合金装备走锻造台:合成配方表里没有它们,1.20 起锻造台多一个模板槽。
 *
 * 窗口布局在 prismarine-windows 里,只能改包:patches/prismarine-windows@2.10.0.patch。
 */
import { describe, expect, it } from 'vitest';
import { createRequire } from 'node:module';

const require_ = createRequire(import.meta.url);
// prismarine-windows 不是本仓库的直接依赖,顺着 mineflayer 的解析根找
const mfRequire = createRequire(require_.resolve('mineflayer'));

describe('锻造台窗口', () => {
  it('1.20.6 的锻造台:模板/底料/添料占 0–2,产出在 3,玩家背包从 4 开始', () => {
    const windows = mfRequire('prismarine-windows')('1.20.6') as {
      createWindow(id: number, type: string, title: string): { inventoryStart: number; craftingResultSlot: number };
    };
    const win = windows.createWindow(1, 'minecraft:smithing', 'smithing');
    expect(win.craftingResultSlot).toBe(3);
    expect(win.inventoryStart).toBe(4);
  });
});
