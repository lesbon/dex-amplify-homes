/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { CardDexProps } from "./CardDex";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CardDexHomeCollectionOverridesProps = {
    CardDexHomeCollection?: PrimitiveOverrideProps<CollectionProps>;
    CardDex?: CardDexProps;
} & EscapeHatchProps;
export declare type CardDexHomeCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => CardDexProps;
} & {
    overrides?: CardDexHomeCollectionOverridesProps | undefined | null;
}>;
export default function CardDexHomeCollection(props: CardDexHomeCollectionProps): React.ReactElement;
