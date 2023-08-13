// Taxa
import { Mimosa } from '../Mimosa';

// Characters
import { Trichomes } from '../../character/Trichomes';
import { Filiform } from '../../character/Trichomes/Filiform';
import { Setiform } from '../../character/Trichomes/Setiform';

import { Leaf } from '../../character/Leaf';
import { Paraphillidia } from '../../character/Leaf/Paraphillidia';
import { Petiole } from '../../character/Leaf/Petiole';

import { Flower } from '../../character/Flower';
import { Calyx } from '../../character/Flower/Calyx';
import { Corolla } from '../../character/Flower/Corolla';

import { Fruit } from '../../character/Fruit';
import { Replum } from '../../character/Fruit/Replum';
import { Epicarp } from '../../character/Fruit/Epicarp';
import { Source } from '../../character/Source';

// Description of Mimosa emaensis
const Mimosa_emaensis = new Mimosa();

Mimosa_emaensis.habit = 'subshrub';

Mimosa_emaensis.trichomes = new Trichomes();
Mimosa_emaensis.trichomes.filiform = new Filiform();
Mimosa_emaensis.trichomes.filiform.present = false;
Mimosa_emaensis.trichomes.setiform = new Setiform();
Mimosa_emaensis.trichomes.setiform.present = false;

Mimosa_emaensis.leaf = new Leaf();
Mimosa_emaensis.leaf.petiole = new Petiole();
Mimosa_emaensis.leaf.petiole.present = true;
Mimosa_emaensis.leaf.petiole.setLength(3);
Mimosa_emaensis.leaf.paraphillidia = new Paraphillidia();
Mimosa_emaensis.leaf.paraphillidia.present = false;
Mimosa_emaensis.leaf.paraphillidia.setLength(null);

Mimosa_emaensis.flower = new Flower();
Mimosa_emaensis.flower.calyx = new Calyx();
Mimosa_emaensis.flower.calyx.numSepals = 4;
Mimosa_emaensis.flower.calyx.length = 1;
Mimosa_emaensis.flower.calyx.shape = 'campanulate';
Mimosa_emaensis.flower.corolla = new Corolla();
Mimosa_emaensis.flower.corolla.numPepals = 4;
Mimosa_emaensis.flower.corolla.length = 3;
Mimosa_emaensis.flower.corolla.shape = 'campanulate';

Mimosa_emaensis.fruit = new Fruit();
Mimosa_emaensis.fruit.replum = new Replum();
Mimosa_emaensis.fruit.replum.shape = 'straight';
Mimosa_emaensis.fruit.replum.prickles = false;
Mimosa_emaensis.fruit.epicarp = new Epicarp();
Mimosa_emaensis.fruit.epicarp.shape = 'straight';
Mimosa_emaensis.fruit.epicarp.prickles = false;

// Source
Mimosa_emaensis.source = new Source();
Mimosa_emaensis.source.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.';
Mimosa_emaensis.source.title = '';
Mimosa_emaensis.source.year = 2021;
