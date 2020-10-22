/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */

import { FileArray, FileBrowser, FileList, FileNavbar, FileToolbar } from 'chonky';
import 'chonky/style/main.css';
import React, { useMemo } from 'react';

import { useStoryLinks } from '../util';

const storyName = 'Scratchpad';
export const Scratchpad: React.FC = () => {
    const folderChain: FileArray = useMemo(
        () => [
            { id: 'zxc', name: 'Bucket', isDir: true },
            { id: 'dfg', name: 'Subfolder', isDir: true },
            null,
            { id: 'bfr', name: 'Home' },
            { id: 'ltr', name: 'Documents', openable: false },
            null,
            { id: 'nrg', name: 'Payslips', openable: false },
        ],
        []
    );
    const files: FileArray = useMemo(
        () => [
            {
                id: 'cvb',
                name: 'Data URI thumbnail',
                thumbnailUrl:
                    'data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7',
            },
        ],
        []
    );

    return (
        <div className="story-wrapper">
            <div className="story-description">
                <h1 className="story-title">{storyName}</h1>
                <p>Please ignore this page. It is used to test new Chonky features.</p>
                <div className="story-links">
                    {useStoryLinks([
                        { gitPath: '2.x_storybook/src/demos/Scratchpad.tsx' },
                    ])}
                </div>
            </div>
            <FileBrowser files={files} folderChain={folderChain}>
                <FileNavbar />
                <FileToolbar />
                <FileList />
            </FileBrowser>
        </div>
    );
};
(Scratchpad as any).storyName = storyName;
